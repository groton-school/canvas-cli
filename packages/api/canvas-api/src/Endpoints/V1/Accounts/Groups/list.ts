import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Group } from '../../../../Resources/Groups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Will only include groups that the user belongs to if this is set
     *
     * type: boolean
     *
     *
     */
    only_own_groups: boolean | string;
    /**
     * - &quot;tabs&quot;: Include the list of tabs configured for each group.  See the
  {api:TabsController#index List available tabs API} for more information.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * Filter groups by their collaboration state:
- &quot;all&quot;: Return both collaborative and non-collaborative groups
- &quot;collaborative&quot;: Return only collaborative groups (default)
- &quot;non_collaborative&quot;: Return only non-collaborative groups
     *
     * 
     *
     * 
     */
    collaboration_state: string;
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
 * List the groups available in a context.
 *
 * Returns the paginated list of active groups in the given context that are visible to user.
 *
 * nickname: list_groups_available_in_context_accounts
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Group[]>(
    `/api/v1/accounts/{account_id}/groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
