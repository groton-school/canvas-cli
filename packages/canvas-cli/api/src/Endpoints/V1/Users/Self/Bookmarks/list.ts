import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List bookmarks
 *
 * Returns the paginated list of bookmarks.
 *
 * Nickname: list_bookmarks
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/bookmarks`, {
    method: 'GET',
    params: parameters
  });
}
