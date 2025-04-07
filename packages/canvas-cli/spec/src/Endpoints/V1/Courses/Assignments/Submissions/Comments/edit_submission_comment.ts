import { SubmissionComment } from '../../../../../../Resources/Submissions.js';

type Parameters = {
  /** If this argument is present, edit the text of a comment. */
  comment: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Edit a submission comment
 *
 * Edit the given submission comment.
 *
 * Nickname: edit_submission_comment
 */
export async function edit_submission_comment({
  parameters
}: Options): Promise<SubmissionComment> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
