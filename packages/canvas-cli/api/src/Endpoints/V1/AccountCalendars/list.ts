import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { account_calendarsAccountCalendartotal_resultsinteger } from '../../../Overrides.js';

export type listSearchParameters = Partial<{
  /**
   * When included, searches available account calendars for the term. Returns
   * matching results. Term must be at least 2 characters.
   */
  search_term: string;
}> &
  Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List available account calendars
 *
 * Returns a paginated list of account calendars available to the current user.
 * Includes visible account calendars where the user has an account
 * association.
 *
 * Nickname: list_available_account_calendars
 */
export async function list(options: Options) {
  const response = await client().fetchAs<
    account_calendarsAccountCalendartotal_resultsinteger[]
  >(`/api/v1/account_calendars`, {
    method: 'GET',
    ...options
  });
  return response;
}
