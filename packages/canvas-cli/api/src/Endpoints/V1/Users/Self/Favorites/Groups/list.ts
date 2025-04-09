import { client } from '../../../../../../Client.js';
import { Group } from '../../../../../../Resources/Groups.js';

type Options = {};

/**
 * List favorite groups
 *
 * Retrieve the paginated list of favorite groups for the current user. If the
 * user has not chosen any favorites, then a selection of groups that the user
 * is a member of will be returned.
 *
 * Nickname: list_favorite_groups
 */
export async function list({}: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/favorites/groups`, {
    method: 'GET'
  });
}
