import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get course nickname
 *
 * Returns the nickname for a specific course.
 *
 * Nickname: get_course_nickname
 */
export async function get(options: Options) {
  const response = await client().fetchAs<CourseNickname>(
    `/api/v1/users/self/course_nicknames/{course_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
