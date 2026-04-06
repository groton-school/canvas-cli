import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

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
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get a single account calendar
 *
 * Get details about a specific account calendar.
 *
 * Nickname: get_single_account_calendar
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
