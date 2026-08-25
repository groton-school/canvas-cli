import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * IDs of users to share the content with.
   *
   * Array
   *
   *
   */
  receiver_ids: string[];
  /**
   * Type of content you are sharing.
   *
   *
   *
   *
   */
  content_type: string;
  /**
     * The id of the content that you are sharing
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  content_id: number | string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a content share
 *
 * Share content directly between two or more users
 *
 * nickname: create_content_share
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
