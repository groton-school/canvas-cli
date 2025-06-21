import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Bookmark } from '../../../../../Resources/Bookmarks.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
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
  const response = await client().fetchAs<Bookmark>(
    `/api/v1/users/self/bookmarks`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
