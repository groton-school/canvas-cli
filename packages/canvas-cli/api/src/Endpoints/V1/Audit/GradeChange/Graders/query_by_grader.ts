import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

export type query_by_graderPathParameters = {
  /** ID */
  grader_id: string;
};

export type query_by_graderSearchParameters = Partial<{
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
}> &
  Paginated;

type Options = {
  pathParams: query_by_graderPathParameters;
} & (
  | {
      searchParams?: Partial<query_by_graderSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_graderSearchParameters;
      strict: true;
    }
);

/**
 * Query by grader
 *
 * List grade change events for a given grader.
 *
 * Nickname: query_by_grader
 */
export async function query_by_grader(options: Options) {
  return await client().fetchAs<GradeChangeEvent[]>(
    `/api/v1/audit/grade_change/graders/{grader_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
