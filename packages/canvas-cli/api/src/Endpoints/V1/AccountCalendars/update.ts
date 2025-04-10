import { client } from '../../../Client.js';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
};

export type updateFormParameters = {
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
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<AccountCalendar>(
    `/v1/account_calendars/{account_id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
