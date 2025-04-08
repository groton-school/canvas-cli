import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single role
 *
 * Retrieve information about a single role
 *
 * Nickname: get_single_role
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Role>(`/v1/accounts/{account_id}/roles/{id}`, {
    method: 'GET',
    params: parameters
  });
}
