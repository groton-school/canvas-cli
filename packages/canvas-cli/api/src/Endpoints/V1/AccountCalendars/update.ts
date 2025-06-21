import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Allow administrators with `manage_account_calendar_events` permission to
   * create events on this calendar, and allow users to view this calendar and
   * its events.
   */
  visible: boolean;
  /**
   * When true, users will automatically see events from this account in their
   * calendar, even if they haven't manually added that calendar.
   */
  auto_subscribe: boolean;
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
