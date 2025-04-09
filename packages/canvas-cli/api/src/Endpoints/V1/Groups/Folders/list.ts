import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type listPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List all folders
 *
 * Returns the paginated list of all folders for the given context. This will be
 * returned as a flat list containing all subfolders as well.
 *
 * Nickname: list_all_folders_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/groups/{group_id}/folders`, {
    method: 'GET',
    pathParams
  });
}
