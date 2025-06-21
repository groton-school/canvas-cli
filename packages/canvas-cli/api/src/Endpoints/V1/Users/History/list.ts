import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { HistoryEntry } from '../../../../Resources/History.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
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
 * List recent history for a user
 *
 * Return a paginated list of the user's recent history. History entries are
 * returned in descending order, newest to oldest. You may list history entries
 * for yourself (use +self+ as the user_id), for a student you observe, or for a
 * user you manage as an administrator. Note that the +per_page+ pagination
 * argument is not supported and the number of history entries returned per page
 * will vary.
 *
 * Nickname: list_recent_history_for_user
 */
export async function list(options: Options) {
  const response = await client().fetchAs<HistoryEntry[]>(
    `/api/v1/users/{user_id}/history`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
