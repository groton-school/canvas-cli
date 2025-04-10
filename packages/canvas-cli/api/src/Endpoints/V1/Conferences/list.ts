import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';
import { Conference } from '../../../Resources/Conferences.js';

export type listSearchParameters = {
  /**
   * If set to "live", returns only conferences that are live (i.e., have
   * started and not finished yet). If omitted, returns all conferences for
   * this user's groups and courses.
   */
  state: string;
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
 * List conferences for the current user
 *
 * Retrieve the paginated list of conferences for all courses and groups the
 * current user belongs to
 *
 * This API returns a JSON object containing the list of conferences. The key
 * for the list of conferences is "conferences".
 *
 * Nickname: list_conferences_for_current_user
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<Conference[]>(`/v1/conferences`, {
    method: 'GET',
    searchParams
  });
}
