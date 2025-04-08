import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

type Parameters = {
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

type Options = {
  parameters: Parameters;
};

/**
 * Update bookmark
 *
 * Updates a bookmark
 *
 * Nickname: update_bookmark
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<Folder>(`/v1/users/self/bookmarks/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
