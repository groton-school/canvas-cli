import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_accounts
 */
export async function new_blackout_date_accounts({
  parameters
}: Options): Promise<BlackoutDate> {
  return await (
    await fetch(`/v1/accounts/{account_id}/blackout_dates/new`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
