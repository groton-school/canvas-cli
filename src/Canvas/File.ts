import {
  DateTimeString,
  PathString,
  URLString,
  UUIDString
} from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { OAuth2 } from '@oauth2-cli/qui-cli-plugin';
import fetch, { fileFromSync, FormData } from 'node-fetch';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import * as Debug from '../Debug.js';
import * as Snapshot from '../Snapshot/Path.js';
import { Course } from './Course.js';
import { isError } from './Error.js';
import * as Canvas from './URL.js';

export type File = {
  id: number;
  uuid: UUIDString;
  folder_id: number;
  display_name: string;
  filename: string;
  'content-type': string;
  url: URLString;
  /** file size in bytes */
  size: number;
  created_at: DateTimeString;
  updated_at: DateTimeString;
  unlock_at: DateTimeString;
  locked: boolean;
  hidden: boolean;
  lock_at: DateTimeString;
  hidden_for_user: boolean;
  /** Changes who can access the file. Valid options are 'inherit' (the default),
   * 'course', 'institution', and 'public'. Only valid in course endpoints. */
  visibility_level: 'inherit' | 'course' | 'institution' | 'public';
  thumbnail_url: URLString | null;
  modified_at: DateTimeString;
  /** simplified content-type mapping */
  mime_class: string;
  /** identifier for file in third-party transcoding service */
  media_entry_id: string;
  locked_for_user: boolean;
  lock_info: any;
  lock_explanation: string;
  /** optional: url to the document preview. This url is specific to the user */
  /** making the api call. Only included in submission endpoints. */
  preview_url?: URLString | null;
};

export type Folder = {
  context_type: string;
  context_id: number;
  files_count: number;
  position: number;
  updated_at: DateTimeString;
  folders_url: URLString;
  files_url: URLString;
  full_name: PathString;
  lock_at: DateTimeString;
  id: number;
  folders_count: number;
  name: string;
  parent_folder_id: string;
  created_at: DateTimeString;
  unlock_at: DateTimeString | null;
  hidden: boolean;
  hidden_for_user: boolean;
  locked: boolean;
  locked_for_user: boolean;
  /* If true, indicates this is a read-only folder containing files submitted to
   * assignments */
  for_submissions: boolean;
};

export type Descriptor = {
  original: PathString;
  accessed: DateTimeString;
  localPath: PathString;
  filename: string;
};

type UploadOptions = {
  course: Course;
  descriptor: Descriptor;
  parent_folder_path?: string;
};

type UploadResponse = {
  upload_url: URLString;
  upload_params: {
    key: string;
    [param: string]: string;
  };
};

export async function upload({
  course,
  descriptor,
  parent_folder_path = 'Imported Files'
}: UploadOptions) {
  const spinner = ora(
    `Uploading file ${Colors.url(descriptor.localPath)}`
  ).start();
  const filePath = path.resolve(
    path.dirname(Snapshot.path()),
    descriptor.localPath.replace(/^\//, '')
  );

  const stat = fs.statSync(filePath);
  const options = new URLSearchParams({
    name: descriptor.filename,
    parent_folder_path: path.join(
      parent_folder_path,
      path.dirname(descriptor.localPath)
    ),
    size: stat.size.toString(),
    on_duplicate: 'rename'
  });
  const next = (await OAuth2.requestJSON(
    Canvas.url(`/api/v1/courses/${course.id}/files`),
    'POST',
    options
  )) as UploadResponse;

  const body = new FormData();
  for (const key in next.upload_params) {
    body.append(key, next.upload_params[key]);
  }
  body.append('file', fileFromSync(filePath));
  const confirm = await fetch(next.upload_url, {
    method: 'POST',
    body
  });
  let result: File;
  switch (confirm.status) {
    case 301:
    case 201:
      if (confirm.headers.has('location')) {
        result = (await OAuth2.requestJSON(
          confirm.headers.get('location')!
        )) as File;
        if (!isError(result)) {
          spinner.succeed(
            `Uploaded ${Colors.value(result.display_name)} to ${Colors.url(result.url)}`
          );
          return result;
        }
      }
    // eslint-disable-next-line -- intentional fall-through
    default:
      throw new Error(
        `Error uploading file: ${Log.syntaxColor({
          ...Debug.course(course),
          file: descriptor,
          filePath,
          confirm,
          error: await confirm.json()
        })}`
      );
  }
}
