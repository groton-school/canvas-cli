import { client } from '../../../../../Client.js';
import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

export type query_by_coursePathParameters = {
  /** ID */
  course_id: string;
};

export type query_by_courseSearchParameters = {
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
};

type Options = {
  pathParams: query_by_coursePathParameters;
  searchParams?: query_by_courseSearchParameters;
};

/**
 * Query by course.
 *
 * List course change events for a given course.
 *
 * Nickname: query_by_course
 */
export async function query_by_course({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/audit/course/courses/{course_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
