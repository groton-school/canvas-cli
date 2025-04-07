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
 * Nickname: list_assignment_submissions_sections
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/submissions`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
