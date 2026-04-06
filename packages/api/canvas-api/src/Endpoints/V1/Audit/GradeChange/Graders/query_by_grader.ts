import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

export type query_by_graderPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  grader_id: string | number;
};

export type query_by_graderSearchParameters = Masquerade &
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
      path: query_by_graderPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_by_graderPathParameters;
    }
) &
  (
    | {
        query?: Partial<query_by_graderSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<query_by_graderSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_by_graderSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: query_by_graderSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Query by grader
 *
 * List grade change events for a given grader.
 *
 * Nickname: query_by_grader
 */
export async function query_by_grader(options: Options) {
  const response = await client().fetchAs<GradeChangeEvent[]>(
    `/api/v1/audit/grade_change/graders/{grader_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
