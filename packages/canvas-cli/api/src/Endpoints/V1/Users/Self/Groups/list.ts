import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Group } from '../../../../../Resources/Groups.js';

export type listSearchParameters = {
  /** Only include groups that are in this type of context. */
  context_type: string;
  /**
   * - "tabs": Include the list of tabs configured for each group. See the
   *   {api:TabsController#index List available tabs API} for more
   *   information.
   */
  include: string[];
} & Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List your groups
 *
 * Returns a paginated list of active groups for the current user.
 *
 * Nickname: list_your_groups
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<Group[]>(`/v1/users/self/groups`, {
    method: 'GET',
    searchParams
  });
}
