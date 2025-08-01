import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

export type remove_group_from_favoritesPathParameters = {
  /**
   * The ID or SIS ID of the group to remove
   *
   * Type: string
   */
  id: string | number;
};

export type remove_group_from_favoritesSearchParameters = Masquerade;

type Options = {
  pathParams: remove_group_from_favoritesPathParameters;
} & (
  | {
      searchParams?: Partial<remove_group_from_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_group_from_favoritesSearchParameters;
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
export async function remove_group_from_favorites(options: Options) {
  const response = await client().fetchAs<Favorite>(
    `/api/v1/users/self/favorites/groups/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
