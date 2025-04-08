import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get account
 *
 * Retrieve information on an individual account, given by local or global ID.
 *
 * Nickname: get_account
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Account>(`/lti/accounts/{account_id}`, {
    method: 'GET',
    params: parameters
  });
}
