import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: query_by_coursePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_by_coursePathParameters;
    }
) &
  (
    | {
        query?: Partial<query_by_courseSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<query_by_courseSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_by_courseSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: query_by_courseSearchParameters;
          }
      ) & {
        strict: true;
      })
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
