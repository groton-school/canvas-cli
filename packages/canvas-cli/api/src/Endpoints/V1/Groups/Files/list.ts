import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List files
 *
 * Returns the paginated list of files for the folder or course.
 *
 * Nickname: list_files_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/groups/{group_id}/files`, {
    method: 'GET',
    params: parameters
  });
}
