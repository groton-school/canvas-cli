import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

export type query_by_studentPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  student_id: string | number;
};

export type query_by_studentSearchParameters = Masquerade &
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
export async function query_by_student(options: Options) {
  const response = await client().fetchAs<GradeChangeEvent[]>(
    `/api/v1/audit/grade_change/students/{student_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
