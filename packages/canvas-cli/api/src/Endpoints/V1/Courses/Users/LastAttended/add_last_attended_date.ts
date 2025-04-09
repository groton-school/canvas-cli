import { client } from '../../../../../Client.js';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

export type add_last_attended_datePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  user_id: string;
};

export type add_last_attended_dateFormParameters = {
  /**
   * The last attended date of a student enrollment in a course.
   *
   * Format: date
   */
  date: string;
};

type Options = {
  pathParams: add_last_attended_datePathParameters;
  params?: add_last_attended_dateFormParameters;
};

/**
 * Add last attended date
 *
 * Add last attended date to student enrollment in course
 *
 * Nickname: add_last_attended_date
 */
export async function add_last_attended_date({ pathParams, params }: Options) {
  return await client().fetchAs<Enrollment>(
    `/v1/courses/{course_id}/users/{user_id}/last_attended`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
