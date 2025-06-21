import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { Course } from '../../../../../../Resources/Courses.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * When set, only return courses that are not configured as blueprint
     * courses.
     */
    exclude_blueprint_courses: boolean;
  }>;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
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
export async function list(options: Options) {
  const response = await client().fetchAs<Course[]>(
    `/api/v1/users/self/favorites/courses`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
