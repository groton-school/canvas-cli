import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

export type remove_course_from_favoritesPathParameters = {
  /** The ID or SIS ID of the course to remove */
  id: string;
};

type Options = {
  pathParams: remove_course_from_favoritesPathParameters;
};

/**
 * Remove course from favorites
 *
 * Remove a course from the current user's favorites.
 *
 * Nickname: remove_course_from_favorites
 */
export async function remove_course_from_favorites({ pathParams }: Options) {
  return await client().fetchAs<Favorite>(
    `/v1/users/self/favorites/courses/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
