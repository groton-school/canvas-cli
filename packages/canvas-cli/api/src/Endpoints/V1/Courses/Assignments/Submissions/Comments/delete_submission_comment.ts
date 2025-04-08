import { client } from '../../../../../../Client.js';
import { SubmissionComment } from '../../../../../../Resources/Submissions.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a submission comment
 *
 * Delete the given submission comment.
 *
 * Nickname: delete_submission_comment
 */
export async function delete_submission_comment({ parameters }: Options) {
  return await client().fetchAs<SubmissionComment>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
