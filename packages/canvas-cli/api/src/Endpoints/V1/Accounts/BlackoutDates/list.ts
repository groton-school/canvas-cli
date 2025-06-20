import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List blackout dates
 *
 * Returns the list of blackout dates for the current context.
 *
 * Nickname: list_blackout_dates_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BlackoutDate[]>(
    `/api/v1/accounts/{account_id}/blackout_dates`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
