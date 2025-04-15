import { client } from '../../../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Reset group favorites
 *
 * Reset the current user's group favorites to the default automatically
 * generated list of enrolled group
 *
 * Nickname: reset_group_favorites
 */
export async function reset_group_favorites(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/self/favorites/groups`, {
    method: 'DELETE',
    ...options
  });
}
