import { client } from '../../../../Client.js';

export type upload_filePathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: upload_filePathParameters;
};

/**
 * Upload a file
 *
 * Upload a file to the group.
 *
 * This API endpoint is the first step in uploading a file to a group. See the
 * {file:file_uploads.html File Upload Documentation} for details on the file
 * upload workflow.
 *
 * Only those with the "Manage Files" permission on a group can upload files to
 * the group. By default, this is anybody participating in the group, or any
 * admin over the group.
 *
 * Nickname: upload_file
 */
export async function upload_file({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/files`, {
    method: 'POST',
    pathParams
  });
}
