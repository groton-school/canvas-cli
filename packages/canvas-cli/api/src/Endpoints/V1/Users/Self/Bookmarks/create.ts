import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type createFormParameters = {
  /** The name of the bookmark */
  name: string;
  /** The url of the bookmark */
  url: string;
  /**
   * The position of the bookmark. Defaults to the bottom.
   *
   * Format: 'int64'
   */
  position: number;
  /** The data associated with the bookmark */
  data: string;
};

type Options =
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    };

/**
 * Create bookmark
 *
 * Creates a bookmark.
 *
 * Nickname: create_bookmark
 */
export async function create(options: Options) {
  return await client().fetchAs<Bookmark>(`/api/v1/users/self/bookmarks`, {
    method: 'POST',
    ...options
  });
}
