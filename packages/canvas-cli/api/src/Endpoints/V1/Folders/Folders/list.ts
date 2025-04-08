import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List folders
 *
 * Returns the paginated list of folders in the folder.
 *
 * Nickname: list_folders
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/folders/{id}/folders`, {
    method: 'GET',
    params: parameters
  });
}
