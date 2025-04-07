import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_accounts
 */
export async function delete_blackout_date_accounts({
  parameters
}: Options): Promise<BlackoutDate> {
  return await (
    await fetch(`/v1/accounts/{account_id}/blackout_dates/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
