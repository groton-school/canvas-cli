import { Admin } from '../../../../Resources/Admins.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove account admin
 *
 * Remove the rights associated with an account admin role from a user.
 *
 * Nickname: remove_account_admin
 */
export async function remove_account_admin({
  parameters
}: Options): Promise<Admin> {
  return await (
    await fetch(`/v1/accounts/{account_id}/admins/{user_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
