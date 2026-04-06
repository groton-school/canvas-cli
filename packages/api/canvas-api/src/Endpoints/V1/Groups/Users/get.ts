import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single group membership
 *
 * Returns the group membership with the given membership id or user id.
 *
 * Nickname: get_single_group_membership_users
 */
export async function get(options: Options) {
  const response = await client().fetchAs<GroupMembership>(
    `/api/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
