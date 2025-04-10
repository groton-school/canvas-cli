import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List bookmarks
 *
 * Returns the paginated list of bookmarks.
 *
 * Nickname: list_bookmarks
 */
export async function list({}: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/bookmarks`, {
    method: 'GET'
  });
}
