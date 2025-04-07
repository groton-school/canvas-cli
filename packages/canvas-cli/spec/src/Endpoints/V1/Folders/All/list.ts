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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/folders/{id}/all`, { method: 'GET', body: parameters })
  ).json();
}
