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
export async function deactivate_role({ parameters }: Options): Promise<Role> {
  return await (
    await fetch(`/v1/accounts/{account_id}/roles/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
