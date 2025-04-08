import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Add group to favorites
 *
 * Add a group to the current user's favorites. If the group is already in the
 * user's favorites, nothing happens.
 *
 * Nickname: add_group_to_favorites
 */
export async function add_group_to_favorites({ parameters }: Options) {
  return await client().fetchAs<Favorite>(
    `/v1/users/self/favorites/groups/{id}`,
    { method: 'POST', params: parameters }
  );
}
