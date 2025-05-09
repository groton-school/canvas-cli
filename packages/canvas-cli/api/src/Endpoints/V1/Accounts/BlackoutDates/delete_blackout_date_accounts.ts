import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type delete_blackout_date_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_blackout_date_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_accounts
 */
export async function delete_blackout_date_accounts(options: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
