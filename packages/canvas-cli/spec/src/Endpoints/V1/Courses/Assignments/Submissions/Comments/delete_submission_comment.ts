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
export async function delete_submission_comment({
  parameters
}: Options): Promise<SubmissionComment> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
