import { Favorite } from '../../../../../../Resources/Favorites.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove group from favorites
 *
 * Remove a group from the current user's favorites.
 *
 * Nickname: remove_group_from_favorites
 */
export async function remove_group_from_favorites({
  parameters
}: Options): Promise<Favorite> {
  return await (
    await fetch(`/v1/users/self/favorites/groups/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
