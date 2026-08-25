import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { GradeChangeEvent } from '../../../../Resources/GradeChangeLog.js';

export type advanced_querySearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Restrict query to events in the specified course.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    course_id: number | string;
    /**
     * Restrict query to the given assignment. If &quot;override&quot; is given, query the course final grade override instead.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    assignment_id: number | string;
    /**
     * User id of a student to search grading events for.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    student_id: number | string;
    /**
     * User id of a grader to search grading events for.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    grader_id: number | string;
    /**
     * The beginning of the time range from which you want events.
     *
     * format: date-time
     *
     *
     */
    start_time: string;
    /**
     * The end of the time range from which you want events.
     *
     * format: date-time
     *
     *
     */
    end_time: string;
  }>;

type Options =
  | {
      query?: Partial<advanced_querySearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<advanced_querySearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: advanced_querySearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: advanced_querySearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Advanced query
 *
 * List grade change events satisfying all given parameters. Teachers may query for events in courses they teach.
Queries without +course_id+ require account administrator rights.

At least one of +course_id+, +assignment_id+, +student_id+, or +grader_id+ must be specified.
 *
 * nickname: advanced_query
 *
 * 
 *
 * 
 */
export async function advanced_query(options: Options) {
  const response = await client().fetchAs<GradeChangeEvent[]>(
    `/api/v1/audit/grade_change`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
