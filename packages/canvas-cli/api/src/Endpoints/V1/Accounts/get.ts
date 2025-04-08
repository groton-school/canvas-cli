import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single account
 *
 * Retrieve information on an individual account, given by id or sis
 * sis_account_id.
 *
 * Nickname: get_single_account
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Account>(`/v1/accounts/{id}`, {
    method: 'GET',
    params: parameters
  });
}
