import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The start date of the blackout date.
   *
   * Format: date
   */
  start_date: string;
  /**
   * The end date of the blackout date.
   *
   * Format: date
   */
  end_date: string;
  /** The title of the blackout date. */
  event_title: string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create Blackout Date
 *
 * Create a blackout date for the given context.
 *
 * Nickname: create_blackout_date_accounts
 */
export async function create(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
