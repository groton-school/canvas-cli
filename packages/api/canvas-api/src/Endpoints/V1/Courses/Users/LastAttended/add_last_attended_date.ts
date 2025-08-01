import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

export type add_last_attended_datePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type add_last_attended_dateSearchParameters = Masquerade;

export type add_last_attended_dateFormParameters = Masquerade & {
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
      searchParams?: Partial<add_last_attended_dateSearchParameters>;
      params?: Partial<add_last_attended_dateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: add_last_attended_dateSearchParameters;
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
