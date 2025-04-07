import { Bookmark } from '../../../../../Resources/Bookmarks.js';

type Parameters = {
  /** The name of the bookmark */
  name: string;
  /** The url of the bookmark */
  url: string;
  /**
   * The position of the bookmark. Defaults to the bottom.
   *
   * Format: int64
   */
  position: number;
  /** The data associated with the bookmark */
  data: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create bookmark
 *
 * Creates a bookmark.
 *
 * Nickname: create_bookmark
 */
export async function create({ parameters }: Options): Promise<Bookmark> {
  return await (
    await fetch(`/v1/users/self/bookmarks`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
