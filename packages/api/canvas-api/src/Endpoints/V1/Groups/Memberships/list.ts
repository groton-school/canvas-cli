import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GroupMembership } from '../../../../Resources/Groups.js';

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
     * Only list memberships with the given workflow_states. By default it will
     * return all memberships.
     */
    filter_states: string[];
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
 * List group memberships
 *
 * A paginated list of the members of a group.
 *
 * Nickname: list_group_memberships
 */
export async function list(options: Options) {
  const response = await client().fetchAs<GroupMembership[]>(
    `/api/v1/groups/{group_id}/memberships`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
