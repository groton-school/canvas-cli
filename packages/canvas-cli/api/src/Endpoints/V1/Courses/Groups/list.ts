import { client } from '../../../../Client.js';
import { Group } from '../../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List the groups available in a context.
 *
 * Returns the paginated list of active groups in the given context that are
 * visible to user.
 *
 * Nickname: list_groups_available_in_context_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/groups`, {
    method: 'GET',
    params: parameters
  });
}
