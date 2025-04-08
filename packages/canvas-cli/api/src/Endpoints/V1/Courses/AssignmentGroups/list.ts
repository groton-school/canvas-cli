import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List assignment groups
 *
 * Returns the paginated list of assignment groups for the current context. The
 * returned groups are sorted by their position field.
 *
 * Nickname: list_assignment_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignment_groups`,
    { method: 'GET', params: parameters }
  );
}
