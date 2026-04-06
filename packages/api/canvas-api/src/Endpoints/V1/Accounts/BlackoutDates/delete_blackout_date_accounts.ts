import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type delete_blackout_date_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_blackout_date_accountsSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_blackout_date_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_blackout_date_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_blackout_date_accountsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_blackout_date_accountsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_blackout_date_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_blackout_date_accountsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_accounts
 */
export async function delete_blackout_date_accounts(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
