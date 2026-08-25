import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type delete_folderPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_folderSearchParameters = Masquerade &
  Partial<{
    /**
     * Set to &#x27;true&#x27; to allow deleting a non-empty folder
     *
     * type: boolean
     *
     *
     */
    force: boolean | string;
  }>;

type Options = (
  | {
      path: delete_folderPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_folderPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_folderSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_folderSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_folderSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_folderSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete folder
 *
 * Remove the specified folder. You can only delete empty folders unless you
set the 'force' flag
 *
 * nickname: delete_folder
 *
 * 
 *
 * 
 */
export async function delete_folder(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/v1/folders/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
