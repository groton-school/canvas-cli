import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List user logins
 *
 * Given a user ID, return a paginated list of that user's logins for the given
 * account.
 *
 * Nickname: list_user_logins_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/logins`, {
    method: 'GET',
    params: parameters
  });
}
