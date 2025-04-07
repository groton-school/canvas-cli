import { Admin } from '../../../../../Resources/Admins.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List my admin roles
 *
 * A paginated list of the current user's roles in the account. The results are
 * the same as those returned by the {api:AdminsController#index List account
 * admins} endpoint with +user_id+ set to +self+, except the "Admins - Add /
 * Remove" permission is not required.
 *
 * Nickname: list_my_admin_roles
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/admins/self`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
