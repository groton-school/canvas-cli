import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
