import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

export type remove_course_nicknamePathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: remove_course_nicknamePathParameters;
};

/**
 * Remove course nickname
 *
 * Remove the nickname for the given course. Subsequent course API calls will
 * return the actual name for the course.
 *
 * Nickname: remove_course_nickname
 */
export async function remove_course_nickname({ pathParams }: Options) {
  return await client().fetchAs<CourseNickname>(
    `/v1/users/self/course_nicknames/{course_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
