import { client } from '../../../Client.js';
import { Folder } from '../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get folder
 *
 * Returns the details for a folder
 *
 * You can get the root folder from a context by using 'root' as the :id. For
 * example, you could get the root folder for a course like:
 *
 * Nickname: get_folder_folders
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Folder>(`/v1/folders/{id}`, {
    method: 'GET',
    params: parameters
  });
}
