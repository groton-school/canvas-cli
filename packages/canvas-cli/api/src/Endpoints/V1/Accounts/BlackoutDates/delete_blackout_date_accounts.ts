import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type delete_blackout_date_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_blackout_date_accountsPathParameters;
};

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_accounts
 */
export async function delete_blackout_date_accounts({ pathParams }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/accounts/{account_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
