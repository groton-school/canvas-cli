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
export async function get({ parameters }: Options): Promise<CourseNickname> {
  return await (
    await fetch(`/v1/users/self/course_nicknames/{course_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
