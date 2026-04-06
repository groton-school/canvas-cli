import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The name of the bookmark */
  name: string;
  /** The url of the bookmark */
  url: string;
  /**
   * The position of the bookmark. Defaults to the bottom.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
  /** The data associated with the bookmark */
  data: string;
};

type Options =
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<createSearchParameters>;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: createSearchParameters;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params: createFormParameters;
      strict: true;
    };

/**
 * Create bookmark
 *
 * Creates a bookmark.
 *
 * Nickname: create_bookmark
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Bookmark>(
    `/api/v1/users/self/bookmarks`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
