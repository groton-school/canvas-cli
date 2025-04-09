import { client } from '../../../../../Client.js';
import { Group } from '../../../../../Resources/Groups.js';

type listSearchParameters = {
  /** Only include groups that are in this type of context. */
  context_type: string;
  /**
   * - "tabs": Include the list of tabs configured for each group. See the
   *   {api:TabsController#index List available tabs API} for more
   *   information.
   */
  include: string[];
};

type Options = {
  searchParams?: listSearchParameters;
};

/**
 * List your groups
 *
 * Returns a paginated list of active groups for the current user.
 *
 * Nickname: list_your_groups
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/groups`, {
    method: 'GET',
    searchParams
  });
}
