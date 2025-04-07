import { Account } from '../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the manually-created courses sub-account for the domain root account
 *
 * Nickname: get_manually_created_courses_sub_account_for_domain_root_account
 */
export async function get({ parameters }: Options): Promise<Account> {
  return await (
    await fetch(`/v1/manually_created_courses_account`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
