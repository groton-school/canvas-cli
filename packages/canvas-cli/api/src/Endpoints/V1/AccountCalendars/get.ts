import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { AccountCalendar } from '../../../Resources/AccountCalendars.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single account calendar
 *
 * Get details about a specific account calendar.
 *
 * Nickname: get_single_account_calendar
 */
export async function get(options: Options) {
  const response = await client().fetchAs<AccountCalendar>(
    `/api/v1/account_calendars/{account_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
