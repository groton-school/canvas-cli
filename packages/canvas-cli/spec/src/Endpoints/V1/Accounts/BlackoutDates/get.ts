import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single blackout date
 *
 * Returns the blackout date with the given id.
 *
 * Nickname: get_single_blackout_date_accounts
 */
export async function get({ parameters }: Options): Promise<BlackoutDate> {
  return await (
    await fetch(`/v1/accounts/{account_id}/blackout_dates/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
