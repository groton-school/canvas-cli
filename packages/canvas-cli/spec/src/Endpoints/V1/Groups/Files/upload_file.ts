type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function upload_file({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/files`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
