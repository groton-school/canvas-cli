import { DateTimeString, PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { ArrayElement, JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Archive from '@msar/types.archive';
import * as Imported from '@msar/types.import';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import path from 'node:path';
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
const cache: Record<string, Canvas.Files.Model | typeof AWAITING> = {};
const ready = new EventEmitter();
ready.setMaxListeners(1000);

async function getCached(
  localPath: string,
  uploader: () => Promise<Canvas.Files.Model>
): Promise<Canvas.Files.Model> {
  if (localPath in cache) {
    if (cache[localPath] === AWAITING) {
      return new Promise((resolve) => {
        ready.on(localPath, () =>
          resolve(cache[localPath] as Canvas.Files.Model)
        );
      });
    }
    return cache[localPath] as Canvas.Files.Model;
  } else {
    cache[localPath] = AWAITING;
    cache[localPath] = await uploader();
    ready.emit(localPath);
    return cache[localPath] as Canvas.Files.Model;
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

  if (Archive.isAnnotated(entry)) {
    if (entry.error) {
      Log.error(
        `${Colors.error('Could not upload unarchived file:')} ${Log.syntaxColor(entry)}`
      );
    } else {
      // FIXME redundant manual Files.Parameters definition
      const args: Canvas.Files.Parameters = {
        parent_folder_path: path.join(
          'Imported Files',
          path.dirname(entry.localPath.replace(/^\//, ''))
        ),
        name: name || entry.filename,
        size: fs.statSync(
          path.join(path.dirname(IndexFile.path()), entry.localPath)
        ).size,
        on_duplicate: 'overwrite'
      };
      if (
        Imported.isAnnotated(entry) &&
        Preferences.duplicates() === 'update'
      ) {
        if (!Imported.isEqual(args, entry.canvas.args)) {
          // FIXME deal with changed files
          Log.error(
            Colors.error(
              `File ${Colors.url(entry.localPath)} has changed but was not updated`
            )
          );
          Log.error({ new: args, old: entry.canvas.args });
        } else {
          Log.info(`File ${Colors.url(entry.localPath)} is up-to-date`);
        }
      } else {
        const file = await getCached(
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
