import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get bookmark
 *
 * Returns the details for a bookmark.
 *
 * nickname: get_bookmark
 *
 *
 *
 *
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
