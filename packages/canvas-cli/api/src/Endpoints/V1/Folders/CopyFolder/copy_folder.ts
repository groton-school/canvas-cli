import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type copy_folderPathParameters = {
  /** ID */
  dest_folder_id: string;
};

export type copy_folderFormParameters = {
  /** The id of the source folder */
  source_folder_id: string;
};

type Options = {
  pathParams: copy_folderPathParameters;
} & (
  | {
      params?: Partial<copy_folderFormParameters>;
      strict?: false;
    }
  | {
      params: copy_folderFormParameters;
      strict: true;
    }
);

/**
 * Copy a folder
 *
 * Copy a folder (and its contents) from elsewhere in Canvas into a folder.
 *
 * Copying a folder across contexts (between courses and users) is permitted,
 * but the source and destination must belong to the same institution. If the
 * source and destination folders are in the same context, the source folder may
 * not contain the destination folder. A folder will be renamed at its
 * destination if another folder with the same name already exists.
 *
 * Nickname: copy_folder
 */
export async function copy_folder(options: Options) {
  return await client().fetchAs<Folder>(
    `/api/v1/folders/{dest_folder_id}/copy_folder`,
    {
      method: 'POST',
      ...options
    }
  );
}
