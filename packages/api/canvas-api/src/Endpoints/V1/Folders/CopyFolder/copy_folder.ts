import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Folder } from '../../../../Resources/Files.js';

export type copy_folderPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  dest_folder_id: string | number;
};

export type copy_folderSearchParameters = Masquerade;

export type copy_folderFormParameters = Masquerade & {
  /** The id of the source folder */
  source_folder_id: string;
};

type Options = (
  | {
      path: copy_folderPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: copy_folderPathParameters;
    }
) &
  (
    | {
        query?: Partial<copy_folderSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<copy_folderSearchParameters>;
        body?: Partial<copy_folderFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<copy_folderFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<copy_folderSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: copy_folderSearchParameters;
        body?: Partial<copy_folderFormParameters>;
        /** @deprecated Use {@link Options.body} */
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
  const response = await client().fetchAs<Folder>(
    `/api/v1/folders/{dest_folder_id}/copy_folder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
