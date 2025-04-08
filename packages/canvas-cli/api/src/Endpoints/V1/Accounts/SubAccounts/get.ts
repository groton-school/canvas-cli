import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the sub-accounts of an account
 *
 * List accounts that are sub-accounts of the given account.
 *
 * Nickname: get_sub_accounts_of_account
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/sub_accounts`,
    { method: 'GET', params: parameters }
  );
}
