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
 * Nickname: list_files_folders
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/folders/{id}/files`, { method: 'GET', body: parameters })
  ).json();
}
