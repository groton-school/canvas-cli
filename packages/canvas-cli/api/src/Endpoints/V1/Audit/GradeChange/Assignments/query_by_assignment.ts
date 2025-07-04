import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

export type query_by_assignmentPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type query_by_assignmentSearchParameters = Masquerade &
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
  pathParams: query_by_assignmentPathParameters;
} & (
  | {
      searchParams?: Partial<query_by_assignmentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_assignmentSearchParameters;
      strict: true;
    }
);

/**
 * Query by assignment
 *
 * List grade change events for a given assignment.
 *
 * Nickname: query_by_assignment
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
