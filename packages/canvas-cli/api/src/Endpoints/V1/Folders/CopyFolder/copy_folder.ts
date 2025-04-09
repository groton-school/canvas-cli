import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

type copy_folderPathParameters = {
  /** ID */
  dest_folder_id: string;
};

type copy_folderFormParameters = {
  /** The id of the source folder */
  source_folder_id: string;
};

type Options = {
  pathParams: copy_folderPathParameters;
  params?: copy_folderFormParameters;
};

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
export async function copy_folder({ pathParams, params }: Options) {
  return await client().fetchAs<Folder>(
    `/v1/folders/{dest_folder_id}/copy_folder`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
