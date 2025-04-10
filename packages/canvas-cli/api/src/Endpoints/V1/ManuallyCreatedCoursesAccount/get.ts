import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Get the manually-created courses sub-account for the domain root account
 *
 * Nickname: get_manually_created_courses_sub_account_for_domain_root_account
 */
export async function get({}: Options) {
  return await client().fetchAs<Account>(
    `/v1/manually_created_courses_account`,
    {
      method: 'GET'
    }
  );
}
