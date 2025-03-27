import { DateTimeString, PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { ArrayElement, JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Archive from '@msar/types.archive';
import * as Imported from '@msar/types.import';
import crypto from 'node:crypto';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import probe from 'probe-image-size';
import { Preferences } from '../App/index.js';
import * as IndexFile from './IndexFile.js';

export type Annotated = {
  original: PathString;
  accessed: DateTimeString;
  localPath: PathString;
  filename: string;
};

// FIXME too narrowly defined for reuse
type Model = ArrayElement<
  ArrayElement<NonNullable<Imported.Data['Assignments']>>['DownloadItems']
>;

type ToCanvasArgsOptions = {
  file: Model;
  parent_folder_path?: string;
};

const AWAITING = true;
const cache: Record<
  number,
  Record<string, Canvas.Files.Model | typeof AWAITING>
> = {};
const ready = new EventEmitter();
ready.setMaxListeners(1000);

async function getCached(
  course_id: number,
  localPath: string,
  uploader: () => Promise<Canvas.Files.Model>
): Promise<Canvas.Files.Model> {
  if (!(course_id in cache)) {
    cache[course_id] = {};
  }
  if (localPath in cache[course_id]) {
    if (cache[course_id][localPath] === AWAITING) {
      return new Promise((resolve) => {
        ready.on(`${course_id}:${localPath}`, () =>
          resolve(cache[course_id][localPath] as Canvas.Files.Model)
        );
      });
    }
    return cache[course_id][localPath] as Canvas.Files.Model;
  } else {
    cache[course_id][localPath] = AWAITING;
    cache[course_id][localPath] = await uploader();
    ready.emit(`${course_id}:${localPath}`);
    return cache[course_id][localPath] as Canvas.Files.Model;
  }
}

export function toCanvasArgs({
  file,
  parent_folder_path = 'Imported Files'
}: ToCanvasArgsOptions): Canvas.Files.Parameters {
  return {
    name: file.FriendlyFileName || file.FileName,
    parent_folder_path: path.join(
      parent_folder_path,
      path.dirname((file.DownloadUrl as unknown as Annotated).localPath)
    ),
    size: fs.statSync(
      path.join(
        path.dirname(IndexFile.path()),
        (file.DownloadUrl as unknown as Annotated).localPath
      )
    ).size,
    on_duplicate: 'overwrite'
  };
}

type HashEntry = { hash: string; filename?: string };

const hashes: Record<PathString, HashEntry> = {};

export function calculateHashes(entry: JSONValue): JSONValue {
  if (entry && typeof entry === 'object') {
    if (Array.isArray(entry)) {
      return entry.map(calculateHashes);
    } else if (Imported.willBeAnnotated(entry)) {
      if (entry.sha1_file_hash && typeof entry.sha1_file_hash === 'string') {
        hashes[entry.localPath] = {
          hash: entry.sha1_file_hash,
          filename: entry.filename
        };
        Log.debug(
          `Reusing stored hash value for ${Colors.url(entry.localPath)}`
        );
      } else if (hashes[entry.localPath]) {
        entry.sha1_file_hash = hashes[entry.localPath].hash;
        Log.debug(
          `Reusing previously calculated hash for ${Colors.url(entry.localPath)}`
        );
      } else {
        const spinner = ora(
          `Calculating hash for ${Colors.url(entry.localPath)}`
        ).start();
        const filePath = path.join(
          path.dirname(IndexFile.path()),
          entry.localPath
        );
        const hash = crypto.createHash('sha1').setEncoding('hex');
        const contents = fs.readFileSync(filePath).toString();
        hash.write(contents);
        hash.end();
        entry.sha1_file_hash = hash.read();
        if (entry.sha1_file_hash) {
          hashes[entry.localPath] = {
            hash: entry.sha1_file_hash,
            filename: entry.filename
          };
          const message = `Hashed ${Colors.url(entry.localPath)} to ${Colors.value(entry.sha1_file_hash)}`;
          Log.debug(message);
          spinner.succeed(message);
        } else {
          spinner.fail();
          throw new Error(
            `Failed to calculate hash for ${Colors.url(entry.localPath)}`
          );
        }
      }
    } else {
      for (const prop of Object.getOwnPropertyNames(entry)) {
        entry[prop] = calculateHashes(entry[prop]);
      }
    }
  }
  return entry;
}

type PrimaryFile = { localPath: PathString; filename?: string };

function selectPrimaryFile(
  annotation: Archive.Annotation | Imported.Annotation
): PrimaryFile {
  if ('original_localPath' in annotation) {
    return {
      localPath: annotation.localPath,
      filename: hashes[annotation.localPath].filename
    };
  } else {
    const hash = hashes[annotation.localPath].hash;
    const duplicates = Object.getOwnPropertyNames(hashes).reduce(
      (duplicates, localPath) => {
        if (hashes[localPath].hash === hash) {
          duplicates.push(localPath);
        }
        return duplicates;
      },
      [] as PathString[]
    );
    let primary = duplicates.filter((localPath) => /orig/i.test(localPath))[0];
    if (!primary) {
      primary = duplicates.filter((localPath) => /large/i.test(localPath))[0];
    }
    if (!primary) {
      primary = duplicates[0];
    }
    if (!primary) {
      throw new Error(
        `Error selecting primary file among duplicates: ${Log.syntaxColor({ annotation, primary, duplicates })}`
      );
    }
    Log.debug(
      `Selected ${Colors.url(primary)} as primary from ${Log.syntaxColor(duplicates)}`
    );
    return { localPath: primary, filename: hashes[primary].filename };
  }
}

type UploadLocalFilesOptions = {
  course: Canvas.Courses.Model;
  entry: JSONValue;
  name?: string;
};

/*
 * FIXME upload IMG elements with src="data:…"
 *   see https://groton.instructure.com/courses/936/assignments/4087
 */
export async function uploadLocalFiles({
  course,
  entry,
  name
}: UploadLocalFilesOptions): Promise<JSONValue> {
  if (typeof entry !== 'object' || entry === null) {
    return entry;
  }

  if (Imported.willBeAnnotated(entry)) {
    if (entry.error) {
      Log.error(
        `${Colors.error('Could not upload unarchived file:')} ${Log.syntaxColor(entry)}`
      );
    } else {
      // eslint-disable-next-line prefer-const
      let { localPath, filename } = selectPrimaryFile(
        entry as Imported.Annotation
      );
      if (!entry.sha1_file_hash) {
        entry.sha1_file_hash = hashes[localPath].hash;
      }
      if (localPath !== entry.localPath) {
        (entry as Imported.Annotation).original_localPath = entry.localPath;
        entry.localPath = localPath;
      }
      localPath = path.join(path.dirname(IndexFile.path()), entry.localPath);
      // FIXME redundant manual Files.Parameters definition
      const args: Canvas.Files.Parameters = {
        parent_folder_path: path.join(
          'Imported Files',
          path.dirname(entry.localPath.replace(/^\//, ''))
        ),
        name: filename || name || entry.filename,
        size: fs.statSync(localPath).size,
        on_duplicate: 'overwrite'
      };
      try {
        if (!('dimensions' in entry)) {
          (entry as Imported.Annotation).dimensions = await probe(
            fs.createReadStream(localPath)
          );
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        // ignore non-image probe errors
      }
      let uploaded = false;
      if (
        Imported.isAnnotated(entry) &&
        Preferences.duplicates() === 'update'
      ) {
        if (
          Imported.isEqual(args, entry.canvas.args) &&
          entry.canvas.course_id === course.id
        ) {
          Log.info(`File ${Colors.url(entry.localPath)} is up-to-date`);
          uploaded = true;
        }
      }
      if (!uploaded) {
        const file = await getCached(
          course.id,
          entry.localPath,
          async () =>
            await Canvas.Files.upload({
              course,
              localFilePath: path.join(
                path.dirname(IndexFile.path()),
                entry.localPath.replace(/^\//, '')
              ),
              args
            })
        );
        (entry as Imported.Annotation).canvas = {
          args,
          id: file.id,
          course_id: course.id,
          display_name: file.display_name,
          url: file.url,
          created_at: file.created_at,
          modified_at: file.modified_at
        };
      }
    }
    return entry;
  }

  let result: JSONValue;
  if (Array.isArray(entry)) {
    result = [];
    for (const elt of entry) {
      result.push(await uploadLocalFiles({ course, entry: elt }));
    }
  } else {
    result = {};
    for (const key in entry) {
      result[key] = await uploadLocalFiles({
        course,
        entry: entry[key],
        name:
          typeof entry.FriendlyFileName === 'string'
            ? entry.FriendlyFileName
            : undefined
      });
    }
  }
  return result;
}
