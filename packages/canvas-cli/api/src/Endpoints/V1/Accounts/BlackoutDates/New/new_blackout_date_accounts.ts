import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

export type new_blackout_date_accountsPathParameters = {
  /** ID */
  account_id: string;
};

export type new_blackout_date_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: new_blackout_date_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<new_blackout_date_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: new_blackout_date_accountsSearchParameters;
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
