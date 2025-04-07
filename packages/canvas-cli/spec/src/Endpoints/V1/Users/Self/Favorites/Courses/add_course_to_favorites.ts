import { Favorite } from '../../../../../../Resources/Favorites.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Add course to favorites
 *
 * Add a course to the current user's favorites. If the course is already in the
 * user's favorites, nothing happens. Canvas for Elementary subject and homeroom
 * courses can be added to favorites, but this has no effect in the UI.
 *
 * Nickname: add_course_to_favorites
 */
export async function add_course_to_favorites({
  parameters
}: Options): Promise<Favorite> {
  return await (
    await fetch(`/v1/users/self/favorites/courses/{id}`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
