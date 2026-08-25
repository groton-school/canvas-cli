import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { File } from '../../../../Resources/Files.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
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
     * When a user replaces a file during upload, Canvas keeps track of the &quot;replacement chain.&quot;

Include this parameter if you wish Canvas to follow the replacement chain if the requested
file was deleted and replaced by another.

Must be set to &#x27;course&#x27; or &#x27;account&#x27;. The &quot;replacement_chain_context_id&quot; parameter must
also be included.
     *
     * 
     *
     * 
     */
    replacement_chain_context_type: string;
    /**
     * When a user replaces a file during upload, Canvas keeps track of the &quot;replacement chain.&quot;

Include this parameter if you wish Canvas to follow the replacement chain if the requested
file was deleted and replaced by another.

Indicates the context ID Canvas should use when following the &quot;replacement chain.&quot; The
&quot;replacement_chain_context_type&quot; parameter must also be included.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    replacement_chain_context_id: number | string;
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get file
 *
 * Returns the standard attachment json object
 *
 * nickname: get_file_groups
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<File>(
    `/api/v1/groups/{group_id}/files/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
