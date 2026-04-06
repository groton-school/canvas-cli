import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type reset_group_favoritesSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<reset_group_favoritesSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<reset_group_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<reset_group_favoritesSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: reset_group_favoritesSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/favorites/groups`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
