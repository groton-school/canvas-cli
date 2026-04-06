import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

export type add_users_to_content_sharePathParameters = {
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

export type add_users_to_content_shareSearchParameters = Masquerade;

export type add_users_to_content_shareFormParameters = Masquerade & {
  /**
   * IDs of users to share the content with.
   *
   * Array
   */
  receiver_ids: string[];
};

type Options = (
  | {
      path: add_users_to_content_sharePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: add_users_to_content_sharePathParameters;
    }
) &
  (
    | {
        query?: Partial<add_users_to_content_shareSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<add_users_to_content_shareSearchParameters>;
        body?: Partial<add_users_to_content_shareFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<add_users_to_content_shareFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: add_users_to_content_shareSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: add_users_to_content_shareSearchParameters;
          }
      ) &
        (
          | {
              body: add_users_to_content_shareFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: add_users_to_content_shareFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Add users to content share
 *
 * Send a previously created content share to additional users
 *
 * Nickname: add_users_to_content_share
 */
export async function add_users_to_content_share(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares/{id}/add_users`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
