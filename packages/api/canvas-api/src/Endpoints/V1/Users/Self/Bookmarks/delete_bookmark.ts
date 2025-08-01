import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type delete_bookmarkPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_bookmarkSearchParameters = Masquerade;

type Options = {
  pathParams: delete_bookmarkPathParameters;
} & (
  | {
      searchParams?: Partial<delete_bookmarkSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_bookmarkSearchParameters;
      strict: true;
    }
);

/**
 * Delete bookmark
 *
 * Deletes a bookmark
 *
 * Nickname: delete_bookmark
 */
export async function delete_bookmark(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/bookmarks/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
