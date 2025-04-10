import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

export type remove_group_from_favoritesPathParameters = {
  /** The ID or SIS ID of the group to remove */
  id: string;
};

type Options = {
  pathParams: remove_group_from_favoritesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Remove group from favorites
 *
 * Remove a group from the current user's favorites.
 *
 * Nickname: remove_group_from_favorites
 */
export async function remove_group_from_favorites({ pathParams }: Options) {
  return await client().fetchAs<Favorite>(
    `/v1/users/self/favorites/groups/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
