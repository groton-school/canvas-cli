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
export async function get({ parameters }: Options): Promise<Role> {
  return await (
    await fetch(`/v1/accounts/{account_id}/roles/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
