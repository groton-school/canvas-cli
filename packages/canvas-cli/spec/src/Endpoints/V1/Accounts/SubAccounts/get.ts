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
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/sub_accounts`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
