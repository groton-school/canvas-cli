import { account_calendarsAccountCalendartotal_resultsinteger } from '';
import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';

export type listSearchParameters = {
  /**
   * When included, searches available account calendars for the term. Returns
   * matching results. Term must be at least 2 characters.
   */
  search_term: string;
} & Paginated;

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
export async function list({ searchParams }: Options) {
  return await client().fetchAs<
    account_calendarsAccountCalendartotal_resultsinteger[]
  >(`/v1/account_calendars`, {
    method: 'GET',
    searchParams
  });
}
