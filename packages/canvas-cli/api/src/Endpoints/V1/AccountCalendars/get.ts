import { client } from '../../../Client.js';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

type getPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single account calendar
 *
 * Get details about a specific account calendar.
 *
 * Nickname: get_single_account_calendar
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<AccountCalendar>(
    `/v1/account_calendars/{account_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
