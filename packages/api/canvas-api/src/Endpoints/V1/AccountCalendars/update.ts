import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Allow administrators with `manage_account_calendar_events` permission to
   * create events on this calendar, and allow users to view this calendar and
   * its events.
   *
   * Type: boolean
   */
  visible: boolean | string;
  /**
   * When true, users will automatically see events from this account in their
   * calendar, even if they haven't manually added that calendar.
   *
   * Type: boolean
   */
  auto_subscribe: boolean | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a calendar
 *
 * Set an account calendar's visibility and auto_subscribe values. Requires the
 * `manage_account_calendar_visibility` permission on the account.
 *
 * Nickname: update_calendar
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
