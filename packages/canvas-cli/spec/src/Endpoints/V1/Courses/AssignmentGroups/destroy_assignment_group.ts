import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Destroy an Assignment Group
 *
 * Deletes the assignment group with the given id.
 *
 * Nickname: destroy_assignment_group
 */
export async function destroy_assignment_group({
  parameters
}: Options): Promise<AssignmentGroup> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
