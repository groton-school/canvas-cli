import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get bookmark
 *
 * Returns the details for a bookmark.
 *
 * Nickname: get_bookmark
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Bookmark>(`/v1/users/self/bookmarks/{id}`, {
    method: 'GET',
    params: parameters
  });
}
