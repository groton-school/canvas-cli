import { Folder } from '../../../../Resources/Files.js';

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
 * Nickname: get_folder_groups
 */
export async function get({ parameters }: Options): Promise<Folder> {
  return await (
    await fetch(`/v1/groups/{group_id}/folders/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
