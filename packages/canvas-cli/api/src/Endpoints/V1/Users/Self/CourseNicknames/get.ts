import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course nickname
 *
 * Returns the nickname for a specific course.
 *
 * Nickname: get_course_nickname
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<CourseNickname>(
    `/v1/users/self/course_nicknames/{course_id}`,
    { method: 'GET', params: parameters }
  );
}
