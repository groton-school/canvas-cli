import { account_calendarsAccountCalendartotal_resultsinteger } from '';
import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List available account calendars
 *
 * Returns a paginated list of account calendars available to the current user.
 * Includes visible account calendars where the user has an account
 * association.
 *
 * Nickname: list_available_account_calendars
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/account_calendars`, {
    method: 'GET',
    params: parameters
  });
}
