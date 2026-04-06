import { client, Masquerade, Paginated } from '#client';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type listSearchParameters = Masquerade & Paginated;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
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
