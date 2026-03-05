import {
  DateString,
  DateTimeString,
  EmailString,
  PathString,
  URLString
} from '@battis/descriptive-types';
import { ArrayElement, JSONValue } from '@battis/typescript-tricks';
import * as Archive from '@msar/types.archive';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { CanvasStudio } from '@oauth2-cli/canvas-studio';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import crypto from 'node:crypto';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import probe from 'probe-image-size';
import { log } from '../App/Courses.js';
import { Preferences } from '../App/index.js';
import * as Workspace from '../App/Workspace.js';
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
  string,
  Record<string, Canvas.Files.File | Media | typeof AWAITING>
> = {};
const ready = new EventEmitter();
ready.setMaxListeners(1000);

async function getCached(
  course_id: string,
  localPath: string,
  uploader: () => Promise<Canvas.Files.File | Media>
): Promise<Canvas.Files.File | Media> {
  if (!(course_id in cache)) {
    cache[course_id] = {};
  }
  if (localPath in cache[course_id]) {
    if (cache[course_id][localPath] === AWAITING) {
      return new Promise((resolve) => {
        ready.on(`${course_id}:${localPath}`, () =>
          resolve(cache[course_id][localPath] as Canvas.Files.File)
        );
      });
    }
    return cache[course_id][localPath] as Canvas.Files.File;
  } else {
    cache[course_id][localPath] = AWAITING;
    cache[course_id][localPath] = await uploader();
    ready.emit(`${course_id}:${localPath}`);
    return cache[course_id][localPath] as Canvas.Files.File;
  }
}

export function toCanvasArgs({
  file,
  parent_folder_path = 'Imported Files'
}: ToCanvasArgsOptions): Canvas.v1.Courses.Files.uploadFormParameters {
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

export async function calculateHashes(entry: JSONValue): Promise<JSONValue> {
  if (entry && typeof entry === 'object') {
    if (Array.isArray(entry)) {
      return await Promise.all(entry.map(calculateHashes));
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
        const filePath = path.join(
          path.dirname(IndexFile.path()),
          entry.localPath
        );

        const hash = crypto.createHash('sha1').setEncoding('hex');
        const fstream = fs.createReadStream(filePath);
        entry.sha1_file_hash = await new Promise<string>((resolve) => {
          fstream.on('end', () => {
            hash.end();
            resolve(hash.read());
          });
          fstream.pipe(hash);
        });

        if (entry.sha1_file_hash) {
          hashes[entry.localPath] = {
            hash: entry.sha1_file_hash,
            filename: entry.filename
          };
          const message = `Hashed ${Colors.url(entry.localPath)} to ${Colors.value(entry.sha1_file_hash)}`;
          Log.debug(message);
        } else {
          throw new Error(
            `Failed to calculate hash for ${Colors.url(entry.localPath)}`
          );
        }
      }
    } else {
      for (const prop of Object.getOwnPropertyNames(entry)) {
        entry[prop] = await calculateHashes(entry[prop]);
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

type StudioUser = {
  id: number;
  full_name: string;
  display_name: string;
  email: EmailString;
  role_names?: (
    | 'Admin'
    | 'Teacher'
    | 'Student'
    | 'Observer'
    | 'Subaccount admin'
  )[];
};

type Media = {
  id: number;
  title: string;
  description: string;
  duration: number;
  created_at: DateTimeString<'ISO'>;
  last_viewed: DateString;
  last_viewed_by_student: DateString;
  thumbnail_url: URLString;
  transcoding_status: string;
  owner: StudioUser;
  size: number;
  source: string;
  embed_id: string;
  lti_launch_id: string;
  archived_at: DateTimeString<'ISO'>;
};

const studioUsers: Record<Canvas.Users.User['id'], StudioUser> = {};
const studioCourses: Canvas.Courses.Course['id'][] = [];

async function getStudioUser(user?: Canvas.Users.User) {
  if (!user) {
    user = await Workspace.getUser();
  }
  if (!(user.id in studioUsers)) {
    let studioUser: StudioUser | undefined = undefined;
    while (!studioUser) {
      const response = (await CanvasStudio.plugin.requestJSON(
        `/api/public/v1/users/search?email=${encodeURIComponent(user.email)}`
      )) as { users: StudioUser[] };
      studioUser = response.users.shift();
    }
    studioUsers[user.id] = studioUser;
  }
  return studioUsers[user.id];
}

type UploadLocalFilesOptions = {
  user?: Canvas.Users.User;
  course: Canvas.Courses.Course;
  entry: JSONValue;
  name?: string;
};

/*
 * FIXME set file (or whole Import folder permissions) to `Only available with link`
 */
/*
 * FIXME upload IMG elements with src="data:…"
 *   see https://groton.instructure.com/courses/936/assignments/4087
 */
export async function uploadLocalFiles({
  user,
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
      const params: Canvas.v1.Courses.Files.uploadFormParameters = {
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
      } catch (_) {
        // ignore non-image probe errors
      }
      let uploaded = false;
      if (
        Imported.isAnnotated(entry) &&
        Preferences.duplicates() === 'update'
      ) {
        if (
          Imported.isEqual(params, entry.canvas.args) &&
          entry.canvas.course_id === course.id
        ) {
          log(course, `File ${Colors.path(entry.localPath)} is up-to-date`);
          uploaded = true;
        }
      }
      if (!uploaded) {
        const file = await getCached(
          course.id.toString(),
          entry.localPath,
          async () => {
            if (path.extname(entry.localPath) === '.mp4') {
              const owner = await getStudioUser(
                user || (await Workspace.getUser())
              );
              const { upload } = (await CanvasStudio.plugin.client.requestJSON(
                `/api/public/v1/media/uploads`,
                'POST',
                { user_id: '3' /* FIXME owner.id*/ }
              )) as { upload: { id: number; url: string } };
              const filePath = path.join(
                path.dirname(IndexFile.path()),
                entry.localPath.replace(/^\//, '')
              );
              await new Promise((resolve, reject) => {
                fs.createReadStream(filePath).pipe(
                  https
                    .request(upload.url, {
                      method: 'PUT',
                      headers: {
                        'content-type': 'video/mp4',
                        'content-length': fs.statSync(filePath).size
                      }
                    })
                    .on('information', Log.debug)
                    .on('response', (res) =>
                      Log.debug(
                        `Canvas studio upload response:\n${Log.syntaxColor({
                          statusCode: res.statusCode,
                          statusMessage: res.statusMessage,
                          headers: res.headers
                        })}`
                      )
                    )
                    .on('error', reject)
                    .on('close', resolve)
                );
              });
              const { media } = (await CanvasStudio.plugin.client.requestJSON(
                `/api/public/v1/media/uploads/${upload.id}/complete`,
                'POST',
                {
                  title: entry.filename,
                  description:
                    'ShortDescription' in entry
                      ? (entry.ShortDescription as string)
                      : ''
                }
              )) as { media: Media };
              return media;
            } else {
              const file = await Canvas.v1.Courses.Files.upload({
                pathParams: { course_id: course.id.toString() },
                file: {
                  filePath: path.join(
                    path.dirname(IndexFile.path()),
                    entry.localPath.replace(/^\//, '')
                  )
                },
                params
              });
              log(
                course,
                `Uploaded file ${Colors.path(entry.localPath)} as ${Colors.value(file.display_name)}`
              );
              return file;
            }
          }
        );
        (entry as Imported.Annotation).canvas = {
          args: params,
          id: file.id.toString(),
          course_id: course.id.toString(),
          display_name: 'display_name' in file ? file.display_name : file.title,
          url:
            'url' in file
              ? file.url
              : (
                  (await CanvasStudio.plugin.client.requestJSON(
                    `/api/public/v1/media/${file.id}/create_embed`,
                    'POST',
                    {
                      course_id: await new Promise((resolve, reject) => {
                        if (!(course.id in studioCourses)) {
                          CanvasStudio.plugin.client
                            .requestJSON(`/api/public/v1/courses/${course.id}`)
                            .catch(async () => {
                              try {
                                await Workspace.enableStudioForCourse(course);
                                resolve(`${course.id}`);
                              } catch (cause) {
                                reject(
                                  new Error(
                                    `Could not enable Canvas Studio access from ${course.name}`,
                                    { cause }
                                  )
                                );
                              }
                            })
                            .then(() => resolve(`${course.id}`));
                        }
                      }),
                      embed_type: 'embed',
                      downloadable: 'true'
                    }
                  )) as { embed_url: URLString }
                ).embed_url,
          created_at: file.created_at,
          modified_at: 'modified_at' in file ? file.modified_at : undefined
        };
      }
    }
    return entry;
  }

  let result: JSONValue;
  if (Array.isArray(entry)) {
    result = [];
    for (const elt of entry) {
      result.push(await uploadLocalFiles({ user, course, entry: elt }));
    }
  } else {
    result = {};
    for (const key in entry) {
      result[key] = await uploadLocalFiles({
        user,
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
