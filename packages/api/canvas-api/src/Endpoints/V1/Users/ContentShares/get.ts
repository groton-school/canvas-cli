import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
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
 * Get content share
 *
 * Return information about a single content share. You may use +self+ as the
 * user_id to retrieve your own content share.
 *
 * Nickname: get_content_share
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
