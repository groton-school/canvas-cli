import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type reset_course_favoritesSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<reset_course_favoritesSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<reset_course_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<reset_course_favoritesSearchParameters>;
      /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/favorites/courses`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
