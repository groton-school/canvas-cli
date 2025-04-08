import { client } from '../../../../../Client.js';
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}/assignments`,
    { method: 'GET', params: parameters }
  );
}
