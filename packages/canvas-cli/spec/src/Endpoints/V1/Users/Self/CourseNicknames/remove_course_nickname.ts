import { CourseNickname } from '../../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove course nickname
 *
 * Remove the nickname for the given course. Subsequent course API calls will
 * return the actual name for the course.
 *
 * Nickname: remove_course_nickname
 */
export async function remove_course_nickname({
  parameters
}: Options): Promise<CourseNickname> {
  return await (
    await fetch(`/v1/users/self/course_nicknames/{course_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
