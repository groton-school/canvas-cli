import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List folders and files
 *
 * Returns the paginated list of folders in the folder and files.
 *
 * Nickname: list_folders_and_files
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/folders/{id}/all`, {
    method: 'GET',
    params: parameters
  });
}
