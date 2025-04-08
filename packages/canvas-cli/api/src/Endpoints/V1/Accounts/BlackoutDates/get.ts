import { client } from '../../../../Client.js';
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
export async function get({ parameters }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/accounts/{account_id}/blackout_dates/{id}`,
    { method: 'GET', params: parameters }
  );
}
