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
export async function get({ parameters }: Options): Promise<Account> {
  return await (
    await fetch(`/v1/accounts/{id}`, { method: 'GET', body: parameters })
  ).json();
}
