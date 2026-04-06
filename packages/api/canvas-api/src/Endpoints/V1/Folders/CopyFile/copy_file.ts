import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { File } from '../../../../Resources/Files.js';

export type copy_filePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  dest_folder_id: string | number;
};

export type copy_fileSearchParameters = Masquerade;

export type copy_fileFormParameters = Masquerade & {
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

type Options = (
  | {
      path: copy_filePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: copy_filePathParameters;
    }
) &
  (
    | {
        query?: Partial<copy_fileSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<copy_fileSearchParameters>;
        body?: Partial<copy_fileFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<copy_fileFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<copy_fileSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: copy_fileSearchParameters;
        body?: Partial<copy_fileFormParameters>;
        /** @deprecated Use {@link Options.body} */
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
  const response = await client().fetchAs<File>(
    `/api/v1/folders/{dest_folder_id}/copy_file`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
