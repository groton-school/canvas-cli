import { Assignment } from '../../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List assignments
 *
 * Returns the paginated list of assignments for the current course or
 * assignment group.
 *
 * Nickname: list_assignments_assignment_groups
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}/assignments`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
