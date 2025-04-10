import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single blackout date
 *
 * Returns the blackout date with the given id.
 *
 * Nickname: get_single_blackout_date_accounts
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/accounts/{account_id}/blackout_dates/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
