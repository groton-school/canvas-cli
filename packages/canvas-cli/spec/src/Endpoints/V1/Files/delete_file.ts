import { File } from '../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete file
 *
 * Remove the specified file. Unlike most other DELETE endpoints, using this
 * endpoint will result in comprehensive, irretrievable destruction of the file.
 * It should be used with the `replace` parameter set to true in cases where the
 * file preview also needs to be destroyed (such as to remove files that violate
 * privacy laws).
 *
 * Nickname: delete_file
 */
export async function delete_file({ parameters }: Options): Promise<File> {
  return await (
    await fetch(`/v1/files/{id}`, { method: 'DELETE', body: parameters })
  ).json();
}
