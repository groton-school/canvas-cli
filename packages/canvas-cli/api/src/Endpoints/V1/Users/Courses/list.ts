import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List courses for a user
 *
 * Returns a paginated list of active courses for this user. To view the course
 * list for a user other than yourself, you must be either an observer of that
 * user or an administrator.
 *
 * Nickname: list_courses_for_user
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{user_id}/courses`, {
    method: 'GET',
    params: parameters
  });
}
