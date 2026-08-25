import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The partial name or full ID of the users to match and return in the
results list. Must be at least 2 characters.
     *
     * 
     *
     * 
     */
    search_term: string;
    /**
     * &quot;avatar_url&quot;: Include users&#x27; avatar_urls.
     *
     *
     *
     *
     */
    include: string[];
    /**
     * Whether to filter out inactive users from the results. Defaults to
false unless explicitly provided.
     *
     * type: boolean
     *
     * 
     */
    exclude_inactive: boolean | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List group&#x27;s users
 *
 * Returns a paginated list of users in the group.
 *
 * nickname: list_group_s_users
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/groups/{group_id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
