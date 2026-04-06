import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Folder } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List folders
 *
 * Returns the paginated list of folders in the folder.
 *
 * Nickname: list_folders
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Folder[]>(
    `/api/v1/folders/{id}/folders`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
