import { HTMLString } from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { CanvasStudio } from '@oauth2-cli/canvas-studio';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import fs from 'node:fs';
import ora, { Ora } from 'ora';
import path from 'path';
import probe from 'probe-image-size';
import { log } from '../../App/Courses.js';
import * as Preferences from '../../App/Preferences.js';
import * as Workspace from '../../App/Workspace/index.js';
import * as IndexFile from '../IndexFile.js';
import * as Cache from './Cache.js';
import * as Hashes from './Hashes.js';

const studioCourses: Canvas.Courses.Course['id'][] = [];

type Options = {
  user?: Canvas.Users.User;
  course: Canvas.Courses.Course;
  entry: JSONValue;
  name?: string;
  description?: HTMLString;
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
  name,
  description
}: Options): Promise<JSONValue> {
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
      let { localPath, filename } = Hashes.primary(
        entry as Imported.Annotation
      );
      if (!entry.sha1_file_hash) {
        entry.sha1_file_hash = Hashes.get(localPath);
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
          entry.canvas.course_id === course.id &&
          (path.extname(entry.localPath) !== '.mp4' ||
            entry.canvas.id ==
              Workspace.CanvasStudio.Hashes.get(entry.sha1_file_hash))
        ) {
          log(course, `File ${Colors.path(entry.localPath)} is up-to-date`);
          uploaded = true;
        }
      }
      if (!uploaded) {
        const file = await Cache.get(
          course.id.toString(),
          entry.localPath,
          async () => {
            if (path.extname(entry.localPath) === '.mp4') {
              let owner: CanvasStudio.User.User | undefined;
              ({ owner, user } = await identifyOwner(user, course));
              const media_id = Workspace.CanvasStudio.Hashes.get(
                entry.sha1_file_hash
              );
              if (media_id) {
                const file = await getExistingVideo(media_id, entry, course);
                if (file) {
                  return file;
                }
              }
              return await uploadVideo(
                entry,
                name,
                filename,
                owner,
                description
              );
            } else {
              return await uploadFile(entry, params, course);
            }
          }
        );
        (entry as Imported.Annotation).canvas = {
          args: params,
          id: file.id.toString(),
          course_id: course.id.toString(),
          display_name: 'display_name' in file ? file.display_name : file.title,
          url: await urlFrom(file, course),
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
        name: ['Title', 'ShortDescription', 'FriendlyFilename'].reduce(
          (name: string | undefined, prop) =>
            name || (typeof entry[prop] === 'string' ? entry[prop] : name),
          undefined
        ),
        description: [
          'LongDescription',
          'Description',
          'ShortDescription'
        ].reduce(
          (description: string | undefined, prop) =>
            description ||
            (typeof entry[prop] === 'string' ? entry[prop] : description),
          undefined
        )
      });
    }
  }
  return result;
}

async function getExistingVideo(
  media_id: number,
  entry: Imported.Annotation,
  course: Canvas.Courses.Course
) {
  try {
    const { media } = await CanvasStudio.v1.media.get({
      path: { media_id }
    });
    log(
      course,
      `Video ${Colors.path(entry.localPath)} identified as existing video ${Colors.value(media.title)}`
    );
    return media;
  } catch {
    log(
      course,
      `Video ${Colors.path(entry.localPath)} identical to Canvas Studio media ID ${Colors.value(media_id)}, but it could not be reused`
    );
  }
  return undefined;
}

async function uploadVideo(
  entry: Imported.Annotation,
  name: string | undefined,
  filename: string | undefined,
  owner: CanvasStudio.User.User,
  description: string | undefined
) {
  const spinner = ora(
    `  Uploading video ${Colors.path(entry.localPath)} as ${Colors.value(name || filename || entry.filename)}`
  ).start();
  const file = await CanvasStudio.uploadLocalFile({
    file_path: path.join(
      path.dirname(IndexFile.path()),
      entry.localPath.replace(/^\//, '')
    ),
    user_id: owner.id,
    title: name || filename || entry.filename,
    description
  });
  if (entry.sha1_file_hash) {
    Workspace.CanvasStudio.Hashes.set(entry.sha1_file_hash, file.id);
  }
  spinner.succeed(
    `  Uploaded video ${Colors.path(entry.localPath)} as ${Colors.value(file.title)}`
  );
  return file;
}

async function identifyOwner(
  user: Canvas.Users.User | undefined,
  course: Canvas.Courses.Course
) {
  let owner: CanvasStudio.User.User | undefined = undefined;
  if (!user && course) {
    user = (
      await Canvas.v1.Courses.Enrollments.list({
        pathParams: { course_id: course.id },
        searchParams: { type: ['TeacherEnrollment'] }
      })
    ).shift()?.user;
  }
  if (user) {
    do {
      owner = (
        await CanvasStudio.v1.users.search({
          query: { email: user.email }
        })
      ).users.shift();
      if (!owner) {
        await Workspace.CanvasStudio.User.enable(user);
      }
    } while (!owner);
  } else {
    owner = await Workspace.CanvasStudio.User.get();
  }
  return { owner, user };
}

async function uploadFile(
  entry: Imported.Annotation,
  params: Canvas.v1.Courses.Files.uploadFormParameters,
  course: Canvas.Courses.Course,
  retries = 3
) {
  let spinner: Ora | undefined = undefined;
  let file: Canvas.Files.File | undefined = undefined;
  do {
    try {
      spinner = ora(
        `  Uploading file ${Colors.path(entry.localPath)} as ${Colors.value(params.name)}`
      ).start();
      file = await Canvas.v1.Courses.Files.upload({
        pathParams: { course_id: course.id.toString() },
        file: {
          filePath: path.join(
            path.dirname(IndexFile.path()),
            entry.localPath.replace(/^\//, '')
          )
        },
        params
      });
    } catch (error) {
      spinner?.fail(`  File upload of ${Colors.path(entry.localPath)} failed`);

      if (isStorageQuotaError(error)) {
        course.storage_quota_mb = parseInt(`${course.storage_quota_mb}`) * 2;
        await Canvas.v1.Courses.update({
          pathParams: { id: course.id },
          params: {
            'course[storage_quota_mb]': course.storage_quota_mb
          }
        });
        log(
          course,
          `Doubled course storage quota to ${course.storage_quota_mb}MB`
        );
        retries--;
      } else {
        throw new Error('File upload failed', { cause: error });
      }
    }
  } while (!file && retries > 0);
  if (file) {
    spinner?.succeed(
      `  Uploaded file ${Colors.path(entry.localPath)} as ${Colors.value(file.display_name)}`
    );
  } else {
    spinner?.fail(`  File upload of ${Colors.path(entry.localPath)} failed`);
    throw new Error('File upload failed', {
      cause: { retries: 3 }
    });
  }
  return file;
}

function isStorageQuotaError(error: unknown) {
  return (
    Error.isError(error) &&
    error.cause &&
    typeof error.cause === 'object' &&
    'response' in error.cause &&
    error.cause.response &&
    typeof error.cause.response === 'object' &&
    'status' in error.cause.response &&
    error.cause.response.status === 400 &&
    'body' in error.cause.response &&
    error.cause.response.body &&
    typeof error.cause.response.body === 'object' &&
    'message' in error.cause.response.body &&
    error.cause.response.body.message === 'file size exceeds quota'
  );
}

async function urlFrom(
  file: Canvas.Files.File | CanvasStudio.Media.Media,
  course: Canvas.Courses.Course
) {
  return 'url' in file
    ? file.url
    : (
        await CanvasStudio.v1.media.create_embed({
          path: { media_id: file.id },
          body: {
            course_id: await new Promise((resolve, reject) => {
              if (!(course.id in studioCourses)) {
                CanvasStudio.v1.courses
                  .get({ path: { course_id: course.id } })
                  .catch(async () => {
                    try {
                      await Workspace.CanvasStudio.Course.enable(course);
                      resolve(course.id);
                    } catch (cause) {
                      reject(
                        new Error(
                          `Could not enable Canvas Studio access from ${course.name}`,
                          { cause }
                        )
                      );
                    }
                  })
                  .then(() => resolve(course.id));
              }
            }),
            embed_type: 'embed',
            downloadable: true
          }
        })
      ).embed_url;
}
