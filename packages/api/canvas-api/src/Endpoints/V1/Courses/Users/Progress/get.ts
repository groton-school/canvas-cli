import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { CourseProgress } from '../../../../../Resources/Courses.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get user progress
 *
 * Return progress information for the user and course
 *
 * You can supply +self+ as the user_id to query your own progress in a course.
 * To query another user's progress, you must be a teacher in the course, an
 * administrator, or a linked observer of the user.
 *
 * Nickname: get_user_progress
 */
export async function get(options: Options) {
  const response = await client().fetchAs<CourseProgress>(
    `/api/v1/courses/{course_id}/users/{user_id}/progress`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
