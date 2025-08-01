import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type delete_blackout_date_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_blackout_date_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: delete_blackout_date_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_blackout_date_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_blackout_date_accountsSearchParameters;
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
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
