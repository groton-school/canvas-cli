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
} & (
  | {
      params?: Partial<add_last_attended_dateFormParameters>;
      strict?: false;
    }
  | {
      params: add_last_attended_dateFormParameters;
      strict: true;
    }
);

/**
 * Add last attended date
 *
 * Add last attended date to student enrollment in course
 *
 * Nickname: add_last_attended_date
 */
export async function add_last_attended_date(options: Options) {
  const response = await client().fetchAs<Enrollment>(
    `/api/v1/courses/{course_id}/users/{user_id}/last_attended`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
