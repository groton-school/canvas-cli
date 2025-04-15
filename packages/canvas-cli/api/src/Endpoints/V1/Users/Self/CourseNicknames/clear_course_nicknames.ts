import { client } from '../../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Clear course nicknames
 *
 * Remove all stored course nicknames.
 *
 * Nickname: clear_course_nicknames
 */
export async function clear_course_nicknames(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/self/course_nicknames`, {
    method: 'DELETE',
    ...options
  });
}
