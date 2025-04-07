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
 * Nickname: list_all_folders_groups
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/groups/{group_id}/folders`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
