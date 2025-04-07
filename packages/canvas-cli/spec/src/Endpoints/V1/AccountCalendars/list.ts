import { account_calendarsAccountCalendartotal_resultsinteger } from '';

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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/account_calendars`, { method: 'GET', body: parameters })
  ).json();
}
