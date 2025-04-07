import { Submission } from '../../../../../Resources/PlagiarismDetectionSubmissions.js';

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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/submissions`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
