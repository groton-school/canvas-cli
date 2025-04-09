import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get course nickname
 *
 * Returns the nickname for a specific course.
 *
 * Nickname: get_course_nickname
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<CourseNickname>(
    `/v1/users/self/course_nicknames/{course_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
