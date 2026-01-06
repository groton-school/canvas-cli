import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

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
  student_id: string | number;
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
 * Get user-in-a-course-level assignment data
 *
 * Returns a list of assignments for the course sorted by due date. For each
 * assignment returns basic assignment information, the grade breakdown
 * (including the student's actual grade), and the basic submission information
 * for the student's submission if it exists.
 *
 * Nickname: get_user_in_a_course_level_assignment_data
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/analytics/users/{student_id}/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
