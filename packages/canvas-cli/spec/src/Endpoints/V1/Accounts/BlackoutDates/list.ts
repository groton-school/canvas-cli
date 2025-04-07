import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List blackout dates
 *
 * Returns the list of blackout dates for the current context.
 *
 * Nickname: list_blackout_dates_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/blackout_dates`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
