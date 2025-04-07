import { SubmissionHistory } from '../../../../../../../Resources/GradebookHistory.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Lists submissions
 *
 * Gives a nested list of submission versions
 *
 * Nickname: lists_submissions
 */
export async function lists_submissions({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/gradebook_history/{date}/graders/{grader_id}/assignments/{assignment_id}/submissions`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
