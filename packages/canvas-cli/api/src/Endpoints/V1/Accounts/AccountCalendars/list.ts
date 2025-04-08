import { client } from '../../../../Client.js';
import { AccountCalendar } from '../../../../Resources/AccountCalendars.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List all account calendars
 *
 * Returns a paginated list of account calendars for the provided account and
 * its first level of sub-accounts. Includes hidden calendars in the response.
 * Requires the `manage_account_calendar_visibility` permission.
 *
 * Nickname: list_all_account_calendars
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/account_calendars`,
    { method: 'GET', params: parameters }
  );
}
