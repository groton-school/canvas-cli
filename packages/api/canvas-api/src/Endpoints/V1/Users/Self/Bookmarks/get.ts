import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get bookmark
 *
 * Returns the details for a bookmark.
 *
 * Nickname: get_bookmark
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Bookmark>(
    `/api/v1/users/self/bookmarks/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
