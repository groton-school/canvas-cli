import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List all folders
 *
 * Returns the paginated list of all folders for the given context. This will be
 * returned as a flat list containing all subfolders as well.
 *
 * Nickname: list_all_folders_users
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{user_id}/folders`, {
    method: 'GET',
    params: parameters
  });
}
