import { client } from '../../../../../../../Client.js';
import { UploadResponse } from '../../../../../../../FileUploads.js';

export type uploadPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type uploadFormParameters = {
  /**
   * The filename of the file. Any UTF-8 name is allowed. Path components such
   * as `/` and `&#x60; will be treated as part of the filename, not a path to
   * a sub-folder.
   */
  name: string;
  /**
   * How to handle duplicate filenames. If `overwrite`, then this file upload
   * will overwrite any other file in the folder with the same name. If
   * `rename`, then this file will be renamed if another file in the folder
   * exists with the given name. If no parameter is given, the default is
   * `overwrite`. This doesn't apply to file uploads in a context that doesn't
   * have folders.
   */
  on_duplicate?: 'overwrite' | 'rename';
  /**
   * The size of the file, in bytes. This field is recommended, as it will let
   * you find out if there's a quota issue before uploading the raw file.
   *
   * Format: integer
   */
  size?: number;
  /**
   * The content type of the file. If not given, it will be guessed based on
   * the file extension.
   *
   * Format: mime-type
   */
  content_type?: string;
  /**
   * The id of the folder to store the file in. An error will be returned if
   * this does not correspond to an existing folder. If this and
   * parent_folder_path are sent an error will be returned. If neither is
   * given, a default folder will be used.
   *
   * Format: int64
   */
  parent_folder_id?: number;
  /**
   * The path of the folder to store the file in. The path separator is the
   * forward slash `/`, never a back slash. The folder will be created if it
   * does not already exist. This parameter only applies to file uploads in a
   * context that has folders, such as a user, a course, or a group. If this
   * and parent_folder_id are sent an error will be returned. If neither is
   * given, a default folder will be used.
   */
  parent_folder_path?: string;
  /**
   * The path of the folder to store the file in. The path separator is the
   * forward slash `/`, never a back slash. The folder will be created if it
   * does not already exist. This parameter only applies to file uploads in a
   * context that has folders, such as a user, a course, or a group. If this
   * and parent_folder_id are sent an error will be returned. If neither is
   * given, a default folder will be used.
   *
   * @deprecated Use parent_folder_path instead.
   */
  folder?: string;
  /**
   * An array of additional information to include in the upload success
   * response. See Files API for more information.
   */
  success_include?: string[];
};

type Options = {
  pathParams: uploadPathParameters;
} & (
  | {
      params?: Partial<uploadFormParameters>;
      strict?: false;
    }
  | {
      params: uploadFormParameters;
      strict: true;
    }
);

/**
 * Upload a file
 *
 * Associate a new quiz submission file
 *
 * This API endpoint is the first step in uploading a quiz submission file. See
 * the {file:file_uploads.html File Upload Documentation} for details on the
 * file upload workflow as these parameters are interpreted as per the
 * documentation there.
 *
 * Nickname: upload_file
 */
export async function upload(options: Options) {
  return await client().fetchAs<UploadResponse>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/self/files`,
    {
      method: 'POST',
      ...options
    }
  );
}
