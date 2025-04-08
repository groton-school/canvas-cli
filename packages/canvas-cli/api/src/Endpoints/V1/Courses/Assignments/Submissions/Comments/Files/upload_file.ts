import { client } from '../../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Upload a file
 *
 * Upload a file to attach to a submission comment
 *
 * See the {file:file_uploads.html File Upload Documentation} for details on the
 * file upload workflow.
 *
 * The final step of the file upload workflow will return the attachment data,
 * including the new file id. The caller can then PUT the file_id to the
 * submission API to attach it to a comment
 *
 * Nickname: upload_file
 */
export async function upload_file({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/files`,
    { method: 'POST', params: parameters }
  );
}
