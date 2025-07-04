import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

export type query_by_coursePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type query_by_courseSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The beginning of the time range from which you want events.
     *
     * Format: date-time
     */
    start_time: string;
    /**
     * The end of the time range from which you want events.
     *
     * Format: date-time
     */
    end_time: string;
  }>;

type Options = {
  pathParams: query_by_coursePathParameters;
} & (
  | {
      searchParams?: Partial<query_by_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_courseSearchParameters;
      strict: true;
    }
);

/**
 * Query by course.
 *
 * List course change events for a given course.
 *
 * Nickname: query_by_course
 */
export async function query_by_course(options: Options) {
  const response = await client().fetchAs<CourseEvent[]>(
    `/api/v1/audit/course/courses/{course_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
