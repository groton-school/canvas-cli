import { Course } from '../../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single course
 *
 * Return information on a single course.
 *
 * Accepts the same include[] parameters as the list action plus:
 *
 * Nickname: get_single_course_accounts
 */
export async function get({ parameters }: Options): Promise<Course> {
  return await (
    await fetch(`/v1/accounts/{account_id}/courses/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
