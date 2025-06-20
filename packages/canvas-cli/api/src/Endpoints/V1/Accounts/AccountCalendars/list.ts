import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { AccountCalendar } from '../../../../Resources/AccountCalendars.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Partial<{
  /**
   * When included, searches all descendent accounts of provided account for
   * the term. Returns matching results. Term must be at least 2 characters.
   * Can be combined with a filter value.
   */
  search_term: string;
  /**
   * When included, only returns calendars that are either visible or hidden.
   * Can be combined with a search term.
   */
  filter: string;
}> &
  Paginated;

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
 * List all account calendars
 *
 * Returns a paginated list of account calendars for the provided account and
 * its first level of sub-accounts. Includes hidden calendars in the response.
 * Requires the `manage_account_calendar_visibility` permission.
 *
 * Nickname: list_all_account_calendars
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AccountCalendar[]>(
    `/api/v1/accounts/{account_id}/account_calendars`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
