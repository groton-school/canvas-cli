import { client } from '../../../../Client.js';
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
 * Nickname: list_users_in_course_users
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/users`, {
    method: 'GET',
    params: parameters
  });
}
