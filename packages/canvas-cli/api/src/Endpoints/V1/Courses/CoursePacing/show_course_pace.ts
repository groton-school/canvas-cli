import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type show_course_pacePathParameters = {
  /** ID */
  id: string;
  /**
   * The id of the course
   *
   * Format: 'int64'
   */
  course_id: number;
};

export type show_course_paceSearchParameters = Partial<{
  /**
   * The id of the course_pace
   *
   * Format: 'int64'
   */
  course_pace_id: number;
}>;

type Options = {
  pathParams: show_course_pacePathParameters;
} & (
  | {
      searchParams?: Partial<show_course_paceSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_course_paceSearchParameters;
      strict: true;
    }
);

/**
 * Show a Course pace
 *
 * Returns a course pace for the course and pace id provided
 *
 * Nickname: show_course_pace
 */
export async function show_course_pace(options: Options) {
  return await client().fetchAs<CoursePace>(
    `/api/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
