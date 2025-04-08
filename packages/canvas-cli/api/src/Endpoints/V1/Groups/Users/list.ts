import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List group's users
 *
 * Returns a paginated list of users in the group.
 *
 * Nickname: list_group_s_users
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/groups/{group_id}/users`, {
    method: 'GET',
    params: parameters
  });
}
