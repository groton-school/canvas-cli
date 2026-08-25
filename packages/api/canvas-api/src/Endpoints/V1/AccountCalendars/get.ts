import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
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
 * Get a single account calendar
 *
 * Get details about a specific account calendar.
 *
 * nickname: get_single_account_calendar
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<AccountCalendar>(
    `/api/v1/account_calendars/{account_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
