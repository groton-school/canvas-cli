import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The partial name or full ID of the users to match and return in the
     * results list. Must be at least 3 characters.
     */
    search_term: string;
    /**
     * Set this value to true if you wish only to search unassigned users in the
     * group category.
     *
     * Type: boolean
     */
    unassigned: boolean | string;
  }>;

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
 * List users in group category
 *
 * Returns a paginated list of users in the group category.
 *
 * Nickname: list_users_in_group_category
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/group_categories/{group_category_id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
