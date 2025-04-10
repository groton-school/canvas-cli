import { client } from '../../../../../../Client.js';

export type uploadPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: uploadPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Upload a file
 *
 * Upload a file to a submission.
 *
 * This API endpoint is the first step in uploading a file to a submission as a
 * student. See the {file:file_uploads.html File Upload Documentation} for
 * details on the file upload workflow.
 *
 * The final step of the file upload workflow will return the attachment data,
 * including the new file id. The caller can then POST to submit the
 * +online_upload+ assignment with these file ids.
 *
 * Nickname: upload_file_sections
 */
export async function upload({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/files`,
    {
      method: 'POST',
      pathParams
    }
  );
}
