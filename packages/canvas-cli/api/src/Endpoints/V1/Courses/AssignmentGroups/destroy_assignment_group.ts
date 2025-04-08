import { client } from '../../../../Client.js';
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
export async function destroy_assignment_group({ parameters }: Options) {
  return await client().fetchAs<AssignmentGroup>(
    `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    { method: 'DELETE', params: parameters }
  );
}
