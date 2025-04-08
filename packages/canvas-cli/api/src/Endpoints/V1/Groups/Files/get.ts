import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get file
 *
 * Returns the standard attachment json object
 *
 * Nickname: get_file_groups
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<File>(`/v1/groups/{group_id}/files/{id}`, {
    method: 'GET',
    params: parameters
  });
}
