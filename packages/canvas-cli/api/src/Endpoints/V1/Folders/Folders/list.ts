import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type listPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List folders
 *
 * Returns the paginated list of folders in the folder.
 *
 * Nickname: list_folders
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/folders/{id}/folders`, {
    method: 'GET',
    pathParams
  });
}
