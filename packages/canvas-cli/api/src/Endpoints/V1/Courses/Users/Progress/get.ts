import { client } from '../../../../../Client.js';
import { CourseProgress } from '../../../../../Resources/Courses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<CourseProgress>(
    `/api/v1/courses/{course_id}/users/{user_id}/progress`,
    {
      method: 'GET',
      ...options
    }
  );
}
