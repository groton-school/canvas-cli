import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

type Parameters = {
  /** The nickname to set. It must be non-empty and shorter than 60 characters. */
  nickname: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Set course nickname
 *
 * Set a nickname for the given course. This will replace the course's name in
 * output of API calls you make subsequently, as well as in selected places in
 * the Canvas web user interface.
 *
 * Nickname: set_course_nickname
 */
export async function set_course_nickname({ parameters }: Options) {
  return await client().fetchAs<CourseNickname>(
    `/v1/users/self/course_nicknames/{course_id}`,
    { method: 'PUT', params: parameters }
  );
}
