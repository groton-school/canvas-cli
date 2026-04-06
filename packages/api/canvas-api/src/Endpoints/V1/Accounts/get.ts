import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Account } from '../../../Resources/Accounts.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single account
 *
 * Retrieve information on an individual account, given by id or sis
 * sis_account_id.
 *
 * Nickname: get_single_account
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Account>(`/api/v1/accounts/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
