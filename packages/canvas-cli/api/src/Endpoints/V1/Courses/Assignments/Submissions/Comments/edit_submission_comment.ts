import { client } from '../../../../../../Client.js';
import { SubmissionComment } from '../../../../../../Resources/Submissions.js';

export type edit_submission_commentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type edit_submission_commentFormParameters = {
  /** If this argument is present, edit the text of a comment. */
  comment: string;
};

type Options = {
  pathParams: edit_submission_commentPathParameters;
  params?: edit_submission_commentFormParameters;
};

/**
 * Edit a submission comment
 *
 * Edit the given submission comment.
 *
 * Nickname: edit_submission_comment
 */
export async function edit_submission_comment({ pathParams, params }: Options) {
  return await client().fetchAs<SubmissionComment>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
