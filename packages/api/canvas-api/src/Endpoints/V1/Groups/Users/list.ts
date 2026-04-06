import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The partial name or full ID of the users to match and return in the
     * results list. Must be at least 2 characters.
     */
    search_term: string;
    /** "avatar_url": Include users' avatar_urls. */
    include: string[];
    /**
     * Whether to filter out inactive users from the results. Defaults to false
     * unless explicitly provided.
     *
     * Type: boolean
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List group's users
 *
 * Returns a paginated list of users in the group.
 *
 * Nickname: list_group_s_users
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
