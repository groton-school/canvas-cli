import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Deactivate a role
 *
 * Deactivates a custom role. This hides it in the user interface and prevents
 * it from being assigned to new users. Existing users assigned to the role will
 * continue to function with the same permissions they had previously. Built-in
 * roles cannot be deactivated.
 *
 * Nickname: deactivate_role
 */
export async function deactivate_role({ parameters }: Options) {
  return await client().fetchAs<Role>(`/v1/accounts/{account_id}/roles/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
