import { client } from '../../../../../../Client.js';
import { Course } from '../../../../../../Resources/Courses.js';

type listSearchParameters = {
  /**
   * When set, only return courses that are not configured as blueprint
   * courses.
   */
  exclude_blueprint_courses: boolean;
};

type Options = {
  searchParams?: listSearchParameters;
};

/**
 * List favorite courses
 *
 * Retrieve the paginated list of favorite courses for the current user. If the
 * user has not chosen any favorites, then a selection of currently enrolled
 * courses will be returned.
 *
 * See the {api:CoursesController#index List courses API} for details on
 * accepted include[] parameters.
 *
 * Nickname: list_favorite_courses
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/favorites/courses`, {
    method: 'GET',
    searchParams
  });
}
