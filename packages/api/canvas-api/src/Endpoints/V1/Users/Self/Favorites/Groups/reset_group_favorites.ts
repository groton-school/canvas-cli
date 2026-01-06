import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type reset_group_favoritesSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<reset_group_favoritesSearchParameters>;
      strict?: false;
    }
  | {
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
