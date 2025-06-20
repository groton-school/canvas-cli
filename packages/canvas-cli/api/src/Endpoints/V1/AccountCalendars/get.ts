import { client } from '../../../Client.js';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
