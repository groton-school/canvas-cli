import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

export type query_by_assignmentPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
};

export type query_by_assignmentSearchParameters = Masquerade &
  Paginated &
  Partial<{
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

type Options = (
  | {
      path: query_by_assignmentPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_by_assignmentPathParameters;
    }
) &
  (
    | {
        query?: Partial<query_by_assignmentSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<query_by_assignmentSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_by_assignmentSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: query_by_assignmentSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Query by assignment
 *
 * List grade change events for a given assignment.
 *
 * nickname: query_by_assignment
 *
 *
 *
 *
 */
export async function query_by_assignment(options: Options) {
  const response = await client().fetchAs<GradeChangeEvent[]>(
    `/api/v1/audit/grade_change/assignments/{assignment_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
