import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

type query_by_assignmentPathParameters = {
  /** ID */
  assignment_id: string;
};

type query_by_assignmentSearchParameters = {
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
  pathParams: query_by_assignmentPathParameters;
  searchParams?: query_by_assignmentSearchParameters;
};

/**
 * Query by assignment
 *
 * List grade change events for a given assignment.
 *
 * Nickname: query_by_assignment
 */
export async function query_by_assignment({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/audit/grade_change/assignments/{assignment_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
