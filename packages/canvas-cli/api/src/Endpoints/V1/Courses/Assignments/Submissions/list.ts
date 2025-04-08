import { client } from '../../../../../Client.js';
import { Submission } from '../../../../../Resources/Submissions.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List assignment submissions
 *
 * A paginated list of all existing submissions for an assignment.
 *
 * Nickname: list_assignment_submissions_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions`,
    { method: 'GET', params: parameters }
  );
}
