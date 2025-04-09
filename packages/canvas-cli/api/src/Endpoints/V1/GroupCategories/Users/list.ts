import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type listPathParameters = {
  /** ID */
  group_category_id: string;
};

type listSearchParameters = {
  /**
   * The partial name or full ID of the users to match and return in the
   * results list. Must be at least 3 characters.
   */
  search_term: string;
  /**
   * Set this value to true if you wish only to search unassigned users in the
   * group category.
   */
  unassigned: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List users in group category
 *
 * Returns a paginated list of users in the group category.
 *
 * Nickname: list_users_in_group_category
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/group_categories/{group_category_id}/users`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
