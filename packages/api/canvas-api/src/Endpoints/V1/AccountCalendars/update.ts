import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
     * Allow administrators with &#x60;manage_account_calendar_events&#x60; permission
to create events on this calendar, and allow users to view this
calendar and its events.
     *
     * type: boolean
     *
     * 
     */
  visible: boolean | string;
  /**
     * When true, users will automatically see events from this account in their
calendar, even if they haven&#x27;t manually added that calendar.
     *
     * type: boolean
     *
     * 
     */
  auto_subscribe: boolean | string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a calendar
 *
 * Set an account calendar's visibility and auto_subscribe values. Requires the
`manage_account_calendar_visibility` permission on the account.
 *
 * nickname: update_calendar
 *
 * 
 *
 * 
 */
export async function update(options: Options) {
  const response = await client().fetchAs<AccountCalendar>(
    `/api/v1/account_calendars/{account_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
