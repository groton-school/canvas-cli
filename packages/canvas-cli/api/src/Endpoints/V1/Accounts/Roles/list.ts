import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List roles
 *
 * A paginated list of the roles available to an account.
 *
 * Nickname: list_roles
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts/{account_id}/roles`, {
    method: 'GET',
    params: parameters
  });
}
