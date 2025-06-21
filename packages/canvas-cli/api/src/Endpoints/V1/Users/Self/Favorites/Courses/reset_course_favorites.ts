import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type reset_course_favoritesSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<reset_course_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: reset_course_favoritesSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/favorites/courses`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
