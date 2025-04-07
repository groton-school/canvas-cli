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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/folders/{id}/folders`, { method: 'GET', body: parameters })
  ).json();
}
