import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

export type query_by_studentPathParameters = {
  /** ID */
  student_id: string;
};

export type query_by_studentSearchParameters = {
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
} & Paginated;

type Options = {
  pathParams: query_by_studentPathParameters;
} & (
  | {
      searchParams?: Partial<query_by_studentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_studentSearchParameters;
      strict: true;
    }
);

/**
 * Query by student
 *
 * List grade change events for a given student.
 *
 * Nickname: query_by_student
 */
export async function query_by_student({ pathParams, searchParams }: Options) {
  return await client().fetchAs<GradeChangeEvent[]>(
    `/v1/audit/grade_change/students/{student_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
