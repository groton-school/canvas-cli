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
export async function get({ parameters }: Options): Promise<Account> {
  return await (
    await fetch(`/lti/accounts/{account_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
