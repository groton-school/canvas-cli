import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type listSearchParameters = Masquerade & Paginated;

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
 * List bookmarks
 *
 * Returns the paginated list of bookmarks.
 *
 * Nickname: list_bookmarks
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Bookmark[]>(
    `/api/v1/users/self/bookmarks`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
