import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type getSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get the manually-created courses sub-account for the domain root account
 *
 * Returns the sub-account that contains manually created courses for the domain
 * root account.
 *
 * Nickname: get_manually_created_courses_sub_account_for_domain_root_account
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Account>(
    `/api/v1/manually_created_courses_account`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
