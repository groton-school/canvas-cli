import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

export type set_course_nicknamePathParameters = {
  /** ID */
  course_id: string;
};

export type set_course_nicknameFormParameters = {
  /** The nickname to set. It must be non-empty and shorter than 60 characters. */
  nickname: string;
};

type Options = {
  pathParams: set_course_nicknamePathParameters;
} & (
  | {
      params?: Partial<set_course_nicknameFormParameters>;
      strict?: false;
    }
  | {
      params?: set_course_nicknameFormParameters;
      strict: true;
    }
);

/**
 * Set course nickname
 *
 * Set a nickname for the given course. This will replace the course's name in
 * output of API calls you make subsequently, as well as in selected places in
 * the Canvas web user interface.
 *
 * Nickname: set_course_nickname
 */
export async function set_course_nickname({ pathParams, params }: Options) {
  return await client().fetchAs<CourseNickname>(
    `/v1/users/self/course_nicknames/{course_id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
