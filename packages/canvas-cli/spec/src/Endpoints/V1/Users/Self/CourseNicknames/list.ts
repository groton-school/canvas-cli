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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/self/course_nicknames`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
