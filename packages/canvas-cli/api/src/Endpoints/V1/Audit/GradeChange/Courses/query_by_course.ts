import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

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
} & Paginated;

type Options = {
  pathParams: query_by_coursePathParameters;
} & (
  | {
      searchParams?: Partial<query_by_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_courseSearchParameters;
      strict: true;
    }
);

/**
 * Query by course
 *
 * List grade change events for a given course.
 *
 * Nickname: query_by_course
 */
export async function query_by_course({ pathParams, searchParams }: Options) {
  return await client().fetchAs<GradeChangeEvent[]>(
    `/v1/audit/grade_change/courses/{course_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
