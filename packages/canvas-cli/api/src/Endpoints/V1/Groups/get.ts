import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
};

export type getSearchParameters = {
  /**
   * - "permissions": Include permissions the current user has for the group.
   * - "tabs": Include the list of tabs configured for each group. See the
   *   {api:TabsController#index List available tabs API} for more
   *   information.
   */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single group
 *
 * Returns the data for a single group, or a 401 if the caller doesn't have the
 * rights to see it.
 *
 * Nickname: get_single_group
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Group>(`/v1/groups/{group_id}`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
