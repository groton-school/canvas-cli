import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List users in account
 *
 * A paginated list of users associated with this account.
 *
 * @example_request curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \
 *       -X GET \
 *       -H 'Authorization: Bearer <token>'
 *
 * nickname: list_users_in_account
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/users`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
