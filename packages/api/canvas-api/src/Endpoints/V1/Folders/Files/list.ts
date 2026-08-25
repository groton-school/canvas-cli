import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { File } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Filter results by content-type. You can specify type/subtype pairs (e.g.,
&#x27;image/jpeg&#x27;), or simply types (e.g., &#x27;image&#x27;, which will match
&#x27;image/gif&#x27;, &#x27;image/jpeg&#x27;, etc.).
     *
     * 
     *
     * 
     */
    content_types: string[];
    /**
     * Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,
&#x27;image/jpeg&#x27;), or simply types (e.g., &#x27;image&#x27;, which will match
&#x27;image/gif&#x27;, &#x27;image/jpeg&#x27;, etc.).
     *
     * 
     *
     * 
     */
    exclude_content_types: string[];
    /**
     * The partial name of the files to match and return.
     *
     *
     *
     *
     */
    search_term: string;
    /**
     * Array of additional information to include.

&quot;user&quot;:: the user who uploaded the file or last edited its content
&quot;usage_rights&quot;:: copyright and license information for the file (see UsageRights)
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * Array of information to restrict to. Overrides include[]

&quot;names&quot;:: only returns file name information
     *
     * 
     *
     * 
     */
    only: string[];
    /**
     * Sort results by this field. Defaults to &#x27;name&#x27;. Note that &#x60;sort&#x3D;user&#x60; implies &#x60;include[]&#x3D;user&#x60;.
     *
     *
     *
     *
     */
    sort: string;
    /**
     * The sorting order. Defaults to &#x27;asc&#x27;.
     *
     *
     *
     *
     */
    order: string;
  }>;

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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List files
 *
 * Returns the paginated list of files for the folder or course.
 *
 * nickname: list_files_folders
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<File[]>(
    `/api/v1/folders/{id}/files`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
