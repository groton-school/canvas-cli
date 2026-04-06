import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_bookmarkPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_bookmarkSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_bookmarkPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_bookmarkPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_bookmarkSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_bookmarkSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_bookmarkSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_bookmarkSearchParameters;
        strict: true;
      }
  );

/**
 * Delete bookmark
 *
 * Deletes a bookmark
 *
 * Nickname: delete_bookmark
 */
export async function delete_bookmark(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/bookmarks/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
