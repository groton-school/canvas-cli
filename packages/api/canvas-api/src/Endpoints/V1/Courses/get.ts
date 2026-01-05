import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Course } from '../../../Resources/Courses.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * - "all_courses": Also search recently deleted courses.
     * - "permissions": Include permissions the current user has for the course.
     * - "observed_users": Include observed users in the enrollments
     * - "course_image": Include course image url if a course image has been set
     * - "banner_image": Include course banner image url if the course is a Canvas
     *   for Elementary subject and a banner image has been set
     * - "concluded": Optional information to include with Course. Indicates
     *   whether the course has been concluded, taking course and term dates
     *   into account.
     * - "lti_context_id": Include course LTI tool id.
     * - "post_manually": Include course post policy. If the post policy is
     *   manually post grades, the value will be true. If the post policy is
     *   automatically post grades, the value will be false.
     */
    include: string[];
    /**
     * The maximum number of teacher enrollments to show. If the course contains
     * more teachers than this, instead of giving the teacher enrollments, the
     * count of teachers will be given under a _teacher_count_ key.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    teacher_limit: number | string;
  }>;

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
 * Get a single course
 *
 * Return information on a single course.
 *
 * Accepts the same include[] parameters as the list action plus:
 *
 * Nickname: get_single_course_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Course>(`/api/v1/courses/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
