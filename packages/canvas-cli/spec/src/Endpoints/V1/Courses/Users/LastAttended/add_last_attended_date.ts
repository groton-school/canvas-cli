import { Enrollment } from '../../../../../Resources/Enrollments.js';

type Parameters = {
  /**
   * The last attended date of a student enrollment in a course.
   *
   * Format: 'date'
   */
  date: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Add last attended date
 *
 * Add last attended date to student enrollment in course
 *
 * Nickname: add_last_attended_date
 */
export async function add_last_attended_date({
  parameters
}: Options): Promise<Enrollment> {
  return await (
    await fetch(`/v1/courses/{course_id}/users/{user_id}/last_attended`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
