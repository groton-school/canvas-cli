import { client } from '../../../Client.js';
import { File } from '../../../Resources/Files.js';

export type delete_filePathParameters = {
  /** ID */
  id: string;
};

export type delete_fileSearchParameters = Partial<{
  /**
   * This action is irreversible. If replace is set to true the file contents
   * will be replaced with a generic "file has been removed" file. This also
   * destroys any previews that have been generated for the file. Must have
   * manage files and become other users permissions
   */
  replace: boolean;
}>;

type Options = {
  pathParams: delete_filePathParameters;
} & (
  | {
      searchParams?: Partial<delete_fileSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_fileSearchParameters;
      strict: true;
    }
);

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
export async function delete_file(options: Options) {
  const response = await client().fetchAs<File>(`/api/v1/files/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
