import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Group } from '../../../../Resources/Groups.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Partial<{
  /** Will only include groups that the user belongs to if this is set */
  only_own_groups: boolean;
  /**
   * - "tabs": Include the list of tabs configured for each group. See the
   *   {api:TabsController#index List available tabs API} for more
   *   information.
   */
  include: string[];
  /**
   * Filter groups by their collaboration state:
   *
   * - "all": Return both collaborative and non-collaborative groups
   * - "collaborative": Return only collaborative groups (default)
   * - "non_collaborative": Return only non-collaborative groups
   */
  collaboration_state: string;
}> &
  Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List the groups available in a context.
 *
 * Returns the paginated list of active groups in the given context that are
 * visible to user.
 *
 * Nickname: list_groups_available_in_context_accounts
 */
export async function list(options: Options) {
  return await client().fetchAs<Group[]>(
    `/api/v1/accounts/{account_id}/groups`,
    {
      method: 'GET',
      ...options
    }
  );
}
