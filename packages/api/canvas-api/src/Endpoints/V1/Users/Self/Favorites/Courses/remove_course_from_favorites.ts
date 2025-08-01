import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

export type remove_course_from_favoritesPathParameters = {
  /**
   * The ID or SIS ID of the course to remove
   *
   * Type: string
   */
  id: string | number;
};

export type remove_course_from_favoritesSearchParameters = Masquerade;

type Options = {
  pathParams: remove_course_from_favoritesPathParameters;
} & (
  | {
      searchParams?: Partial<remove_course_from_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_course_from_favoritesSearchParameters;
      strict: true;
    }
);

/**
 * Remove course from favorites
 *
 * Remove a course from the current user's favorites.
 *
 * Nickname: remove_course_from_favorites
 */
export async function remove_course_from_favorites(options: Options) {
  const response = await client().fetchAs<Favorite>(
    `/api/v1/users/self/favorites/courses/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
