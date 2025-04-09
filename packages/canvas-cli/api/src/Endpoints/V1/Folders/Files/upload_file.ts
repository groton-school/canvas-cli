import { client } from '../../../../Client.js';

export type upload_filePathParameters = {
  /** ID */
  folder_id: string;
};

type Options = {
  pathParams: upload_filePathParameters;
};

/**
 * Upload a file
 *
 * Upload a file to a folder.
 *
 * This API endpoint is the first step in uploading a file. See the
 * {file:file_uploads.html File Upload Documentation} for details on the file
 * upload workflow.
 *
 * Only those with the "Manage Files" permission on a course or group can upload
 * files to a folder in that course or group.
 *
 * Nickname: upload_file
 */
export async function upload_file({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/folders/{folder_id}/files`, {
    method: 'POST',
    pathParams
  });
}
