import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

export type copy_filePathParameters = {
  /** ID */
  dest_folder_id: string;
};

export type copy_fileFormParameters = {
  /** The id of the source file */
  source_file_id: string;
  /**
   * What to do if a file with the same name already exists at the
   * destination. If such a file exists and this parameter is not given, the
   * call will fail.
   *
   * "overwrite":: Replace an existing file with the same name "rename":: Add
   * a qualifier to make the new filename unique
   */
  on_duplicate: string;
};

type Options = {
  pathParams: copy_filePathParameters;
} & (
  | {
      params?: Partial<copy_fileFormParameters>;
      strict?: false;
    }
  | {
      params: copy_fileFormParameters;
      strict: true;
    }
);

/**
 * Copy a file
 *
 * Copy a file from elsewhere in Canvas into a folder.
 *
 * Copying a file across contexts (between courses and users) is permitted, but
 * the source and destination must belong to the same institution.
 *
 * Nickname: copy_file
 */
export async function copy_file(options: Options) {
  return await client().fetchAs<File>(
    `/api/v1/folders/{dest_folder_id}/copy_file`,
    {
      method: 'POST',
      ...options
    }
  );
}
