import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single account calendar
 *
 * Get details about a specific account calendar.
 *
 * Nickname: get_single_account_calendar
 */
export async function get({ parameters }: Options): Promise<AccountCalendar> {
  return await (
    await fetch(`/v1/account_calendars/{account_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
