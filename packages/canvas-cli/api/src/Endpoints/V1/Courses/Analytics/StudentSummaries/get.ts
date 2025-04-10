import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

export type getSearchParameters = {
  /** The order results in which results are returned. Defaults to "name". */
  sort_column: string;
  /** If set, returns only the specified student. */
  student_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: getSearchParameters;
      strict: true;
    }
);

/**
 * Get course-level student summary data
 *
 * Returns a summary of per-user access information for all students in a
 * course. This includes total page views, total participations, and a breakdown
 * of on-time/late status for all homework submissions in the course.
 *
 * Each student's summary also includes the maximum number of page views and
 * participations by any student in the course, which may be useful for some
 * visualizations (since determining maximums client side can be tricky with
 * pagination).
 *
 * Nickname: get_course_level_student_summary_data
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/analytics/student_summaries`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
