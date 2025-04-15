import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

export type add_group_to_favoritesPathParameters = {
  /**
   * The ID or SIS ID of the group to add. The current user must be a member
   * of the group.
   */
  id: string;
};

type Options = {
  pathParams: add_group_to_favoritesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Add group to favorites
 *
 * Add a group to the current user's favorites. If the group is already in the
 * user's favorites, nothing happens.
 *
 * Nickname: add_group_to_favorites
 */
export async function add_group_to_favorites(options: Options) {
  return await client().fetchAs<Favorite>(
    `/api/v1/users/self/favorites/groups/{id}`,
    {
      method: 'POST',
      ...options
    }
  );
}
