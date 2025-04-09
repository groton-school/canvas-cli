import { client } from '../../../../../../../Client.js';

type upload_filePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

type upload_fileFormParameters = {
  /** The name of the quiz submission file */
  name: string;
  /** How to handle duplicate names */
  on_duplicate: string;
};

type Options = {
  pathParams: upload_filePathParameters;
  params?: upload_fileFormParameters;
};

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
export async function upload_file({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/self/files`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
