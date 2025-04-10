import { client } from '../../../../../../Client.js';
import { Favorite } from '../../../../../../Resources/Favorites.js';

export type add_course_to_favoritesPathParameters = {
  /**
   * The ID or SIS ID of the course to add. The current user must be
   * registered in the course.
   */
  id: string;
};

type Options = {
  pathParams: add_course_to_favoritesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Add course to favorites
 *
 * Add a course to the current user's favorites. If the course is already in the
 * user's favorites, nothing happens. Canvas for Elementary subject and homeroom
 * courses can be added to favorites, but this has no effect in the UI.
 *
 * Nickname: add_course_to_favorites
 */
export async function add_course_to_favorites({ pathParams }: Options) {
  return await client().fetchAs<Favorite>(
    `/v1/users/self/favorites/courses/{id}`,
    {
      method: 'POST',
      pathParams
    }
  );
}
