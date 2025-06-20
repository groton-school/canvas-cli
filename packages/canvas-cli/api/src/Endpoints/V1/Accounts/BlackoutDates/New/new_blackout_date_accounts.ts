import { client } from '../../../../../Client.js';
import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

export type new_blackout_date_accountsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: new_blackout_date_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_accounts
 */
export async function new_blackout_date_accounts(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates/new`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
