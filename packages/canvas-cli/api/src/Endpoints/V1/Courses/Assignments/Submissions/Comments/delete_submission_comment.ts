import { client } from '../../../../../../Client.js';
import { SubmissionComment } from '../../../../../../Resources/Submissions.js';

export type delete_submission_commentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_submission_commentPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a submission comment
 *
 * Delete the given submission comment.
 *
 * Nickname: delete_submission_comment
 */
export async function delete_submission_comment({ pathParams }: Options) {
  return await client().fetchAs<SubmissionComment>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
