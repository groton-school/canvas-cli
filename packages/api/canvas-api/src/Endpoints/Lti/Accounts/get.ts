import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Account } from '../../../Resources/Accounts.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
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
      })
  );

/**
 * Get account
 *
 * Retrieve information on an individual account, given by local or global ID.
 *
 * Nickname: get_account
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Account>(
    `/api/lti/accounts/{account_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
