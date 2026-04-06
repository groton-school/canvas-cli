import { client, Masquerade, Paginated } from '#client';
import { Account } from '../../../Resources/Accounts.js';

export type getSearchParameters = Masquerade & Paginated;

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
 * Get accounts that admins can manage
 *
 * A paginated list of accounts where the current user has permission to create
 * or manage courses. List will be empty for students and teachers as only
 * admins can view which accounts they are in.
 *
 * Nickname: get_accounts_that_admins_can_manage
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Account[]>(
    `/api/v1/manageable_accounts`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
