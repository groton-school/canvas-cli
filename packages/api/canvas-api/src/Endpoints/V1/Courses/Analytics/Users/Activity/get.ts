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
 * Get user-in-a-course-level participation data
 *
 * Returns page view hits grouped by hour, and participation details through the
 * entire history of the course.
 *
 * `page_views` are returned as a hash, where the keys are iso8601 dates,
 * bucketed by the hour. `participations` are returned as an array of hashes,
 * sorted oldest to newest.
 *
 * Nickname: get_user_in_a_course_level_participation_data
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/analytics/users/{student_id}/activity`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
