import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List users in group category
 *
 * Returns a paginated list of users in the group category.
 *
 * Nickname: list_users_in_group_category
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/group_categories/{group_category_id}/users`,
    { method: 'GET', params: parameters }
  );
}
