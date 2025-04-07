import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get an Assignment Group
 *
 * Returns the assignment group with the given id.
 *
 * Nickname: get_assignment_group
 */
export async function get({ parameters }: Options): Promise<AssignmentGroup> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
