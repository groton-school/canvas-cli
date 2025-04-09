import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List folders and files
 *
 * Returns the paginated list of folders in the folder and files.
 *
 * Nickname: list_folders_and_files
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/folders/{id}/all`, {
    method: 'GET',
    pathParams
  });
}
