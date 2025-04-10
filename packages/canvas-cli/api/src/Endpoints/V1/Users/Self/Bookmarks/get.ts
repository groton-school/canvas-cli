import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get bookmark
 *
 * Returns the details for a bookmark.
 *
 * Nickname: get_bookmark
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Bookmark>(`/v1/users/self/bookmarks/{id}`, {
    method: 'GET',
    pathParams
  });
}
