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
import ora from 'ora';
import * as Debug from '../Debug.js';
import { stringify } from './API.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';
import * as Canvas from './URL.js';

type Folder = {
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
  parent_folder_id: number;
  created_at: DateTimeString;
  unlock_at: DateTimeString | null;
  hidden: boolean;
  hidden_for_user: boolean;
  locked: boolean;
  locked_for_user: boolean;
  /** If true, indicates this is a read-only folder containing files submitted to
   * assignments */
  for_submissions: boolean;
};

/** Describes the copyright and license information for a File */
type UsageRights = {
  /** Copyright line for the file */
  legal_copyright: string;
  /** Justification for using the file in a Canvas course. Valid values are
   * 'own_copyright', 'public_domain', 'used_by_permission', 'fair_use',
   * 'creative_commons' */
  use_justification:
    | 'own_copyright'
    | 'public_domain'
    | 'used_by_permission'
    | 'fair_use'
    | 'creative_commons';
  /** License identifier for the file. */
  license: string;
  /** Readable license name */
  license_name: string;
  /** Explanation of the action performed */
  message: string;
  /** List of ids of files that were updated */
  file_ids: number[];
};

type License = {
  /** a short string identifying the license */
  id: string;
  /** the name of the license */
  name: string;
  /** a link to the license text */
  url: URLString;
};

export type Model = {
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
  /** optional: url to the document preview. This url is specific to the user
   * making the api call. Only included in submission endpoints. */
  preview_url?: URLString | null;
};

export type Parameters = {
  /** The filename of the file. Any UTF-8 name is allowed. Path components such as `/` and `\` will be treated as part of the filename, not a path to a sub-folder. */
  name: string;
  /** The size of the file, in bytes. This field is recommended, as it will let you find out if there's a quota issue before uploading the raw file. */
  size?: number;
  /** The content type of the file. If not given, it will be guessed based on the file extension. */
  content_type?: string;
  /** The id of the folder to store the file in. An error will be returned if this does not correspond to an existing folder. If this and parent_folder_path are sent an error will be returned. If neither is given, a default folder will be used. */
  parent_folder_id?: number;
  /** The path of the folder to store the file in. The path separator is the forward slash `/`, never a back slash. The folder will be created if it does not already exist. This parameter only applies to file uploads in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used. */
  parent_folder_path?: string;
  /** How to handle duplicate filenames. If `overwrite`, then this file upload will overwrite any other file in the folder with the same name. If `rename`, then this file will be renamed if another file in the folder exists with the given name. If no parameter is given, the default is `overwrite`. This doesn't apply to file uploads in a context that doesn't have folders. */
  on_duplicate?: 'overwrite' | 'rename';
  /** An array of additional information to include in the upload success response. See Files API for more information. */
  success_include?: ('user' | 'usage_rights')[];
};

type UploadOptions = {
  course: Courses.Model;
  localFilePath: string;
  args: Parameters;
};

type UploadResponse = {
  upload_url: URLString;
  upload_params: {
    key: string;
    [param: string]: string;
  };
};

/** TODO expand capability to upload to account or user files as well */
export async function upload({ course, localFilePath, args }: UploadOptions) {
  const spinner = ora(`Uploading file ${Colors.url(localFilePath)}`).start();

  if (!args.size) {
    args.size = fs.statSync(localFilePath).size;
  }
  const next = (await OAuth2.requestJSON(
    Canvas.url(`/api/v1/courses/${course.id}/files`),
    'POST',
    new URLSearchParams(stringify(args))
  )) as UploadResponse;

  const body = new FormData();
  for (const key in next.upload_params) {
    body.append(key, next.upload_params[key]);
  }
  body.append('file', fileFromSync(localFilePath));
  const confirm = await fetch(next.upload_url, {
    method: 'POST',
    body
  });
  let result: Model;
  switch (confirm.status) {
    case 301:
    case 201:
      if (confirm.headers.has('location')) {
        result = (await OAuth2.requestJSON(
          confirm.headers.get('location')!
        )) as Model;
        if (!isError(result)) {
          spinner.succeed(
            `Uploaded ${Colors.value(result.display_name)} to ${Colors.url(result.url)}`
          );
          return result;
        }
      }
    // eslint-disable-next-line -- intentional fall-through */
    default:
      throw new Error(
        `Error uploading file: ${Log.syntaxColor({
          ...Debug.course(course),
          args,
          localFilePath,
          confirm,
          error: await confirm.json()
        })}`
      );
  }
}
