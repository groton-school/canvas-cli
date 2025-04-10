import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type listSearchParameters = Paginated;

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
  return await client().fetchAs<Bookmark[]>(`/v1/users/self/bookmarks`, {
    method: 'GET'
  });
}
