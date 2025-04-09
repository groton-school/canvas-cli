import { client } from '../../../../../Client.js';
import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

export type new_blackout_date_accountsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: new_blackout_date_accountsPathParameters;
};

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_accounts
 */
export async function new_blackout_date_accounts({ pathParams }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/accounts/{account_id}/blackout_dates/new`,
    {
      method: 'GET',
      pathParams
    }
  );
}
