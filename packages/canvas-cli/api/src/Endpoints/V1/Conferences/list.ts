import { client } from '../../../Client.js';
import { Conference } from '../../../Resources/Conferences.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/conferences`, {
    method: 'GET',
    params: parameters
  });
}
