import { client } from '../../../../../Client.js';
import { Group } from '../../../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List your groups
 *
 * Returns a paginated list of active groups for the current user.
 *
 * Nickname: list_your_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/groups`, {
    method: 'GET',
    params: parameters
  });
}
