import { Bookmark } from '../../../../../Resources/Bookmarks.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List bookmarks
 *
 * Returns the paginated list of bookmarks.
 *
 * Nickname: list_bookmarks
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/self/bookmarks`, { method: 'GET', body: parameters })
  ).json();
}
