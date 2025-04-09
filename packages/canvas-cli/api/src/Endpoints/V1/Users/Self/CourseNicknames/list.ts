import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

type Options = {};

/**
 * List course nicknames
 *
 * Returns all course nicknames you have set.
 *
 * Nickname: list_course_nicknames
 */
export async function list({}: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/course_nicknames`, {
    method: 'GET'
  });
}
