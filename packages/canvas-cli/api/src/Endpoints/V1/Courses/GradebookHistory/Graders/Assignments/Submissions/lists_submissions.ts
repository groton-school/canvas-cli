import { client } from '../../../../../../../Client.js';
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
export async function lists_submissions({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/gradebook_history/{date}/graders/{grader_id}/assignments/{assignment_id}/submissions`,
    { method: 'GET', params: parameters }
  );
}
