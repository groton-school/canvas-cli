import { client } from '../../../../Client.js';

export type upload_filePathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: upload_filePathParameters;
};

/**
 * Upload a file
 *
 * Upload a file to the user's personal files section.
 *
 * This API endpoint is the first step in uploading a file to a user's files.
 * See the {file:file_uploads.html File Upload Documentation} for details on the
 * file upload workflow.
 *
 * Note that typically users will only be able to upload files to their own
 * files section. Passing a user_id of +self+ is an easy shortcut to specify the
 * current user.
 *
 * Nickname: upload_file
 */
export async function upload_file({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/files`, {
    method: 'POST',
    pathParams
  });
}
