import { client } from '../../../../../../Client.js';

type Options = {};

/**
 * Reset course favorites
 *
 * Reset the current user's course favorites to the default automatically
 * generated list of enrolled courses
 *
 * Nickname: reset_course_favorites
 */
export async function reset_course_favorites({}: Options) {
  return await client().fetchAs<void>(`/v1/users/self/favorites/courses`, {
    method: 'DELETE'
  });
}
