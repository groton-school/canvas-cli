import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List users in course
 *
 * Returns the paginated list of users in this course. And optionally the user's
 * enrollments in the course.
 *
 * Nickname: list_users_in_course_search_users
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/search_users`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
