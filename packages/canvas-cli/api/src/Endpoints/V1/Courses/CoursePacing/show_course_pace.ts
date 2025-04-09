import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

type show_course_pacePathParameters = {
  /** ID */
  id: string;
  /**
   * The id of the course
   *
   * Format: 'int64'
   */
  course_id: number;
};

type show_course_paceSearchParameters = {
  /**
   * The id of the course_pace
   *
   * Format: 'int64'
   */
  course_pace_id: number;
};

type Options = {
  pathParams: show_course_pacePathParameters;
  searchParams?: show_course_paceSearchParameters;
};

/**
 * Show a Course pace
 *
 * Returns a course pace for the course and pace id provided
 *
 * Nickname: show_course_pace
 */
export async function show_course_pace({ pathParams, searchParams }: Options) {
  return await client().fetchAs<CoursePace>(
    `/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
