import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Group } from '../../../Resources/Groups.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * - &quot;permissions&quot;: Include permissions the current user has
  for the group.
- &quot;tabs&quot;: Include the list of tabs configured for each group.  See the
  {api:TabsController#index List available tabs API} for more information.
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

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
 * Get a single group
 *
 * Returns the data for a single group, or a 401 if the caller doesn't have
the rights to see it.
 *
 * nickname: get_single_group
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Group>(`/api/v1/groups/{group_id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
