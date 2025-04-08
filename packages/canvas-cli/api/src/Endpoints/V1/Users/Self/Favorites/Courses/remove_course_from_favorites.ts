import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove course from favorites
 *
 * Remove a course from the current user's favorites.
 *
 * Nickname: remove_course_from_favorites
 */
export async function remove_course_from_favorites({ parameters }: Options) {
  return await client().fetchAs<Favorite>(
    `/v1/users/self/favorites/courses/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
