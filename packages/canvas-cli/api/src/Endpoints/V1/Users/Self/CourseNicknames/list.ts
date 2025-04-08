import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List course nicknames
 *
 * Returns all course nicknames you have set.
 *
 * Nickname: list_course_nicknames
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/self/course_nicknames`, {
    method: 'GET',
    params: parameters
  });
}
