import { client } from '../../../Client.js';

type Options = {};

/**
 * List polls
 *
 * Returns the paginated list of polls for the current user.
 *
 * Nickname: list_polls
 */
export async function list({}: Options) {
  return await client().fetchAs<void>(`/v1/polls`, {
    method: 'GET'
  });
}
