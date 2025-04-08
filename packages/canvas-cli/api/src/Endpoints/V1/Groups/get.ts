import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single group
 *
 * Returns the data for a single group, or a 401 if the caller doesn't have the
 * rights to see it.
 *
 * Nickname: get_single_group
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Group>(`/v1/groups/{group_id}`, {
    method: 'GET',
    params: parameters
  });
}
