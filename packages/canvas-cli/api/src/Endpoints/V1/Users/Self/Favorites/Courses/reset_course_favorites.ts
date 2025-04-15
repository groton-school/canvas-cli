import { client } from '../../../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Reset course favorites
 *
 * Reset the current user's course favorites to the default automatically
 * generated list of enrolled courses
 *
 * Nickname: reset_course_favorites
 */
export async function reset_course_favorites(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/self/favorites/courses`, {
    method: 'DELETE',
    ...options
  });
}
