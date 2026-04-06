import { client, Masquerade } from '#client';
import { Account } from '../../../Resources/Accounts.js';

export type getSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<getSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: getSearchParameters;
        }
      | {
          /** @deprecated Use {Options.query} */
          searchParams: getSearchParameters;
        }
    ) & {
      strict: true;
    });

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
