import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include.
     *
     * "user":: the user who uploaded the file or last edited its content
     * "usage_rights":: copyright and license information for the file (see
     * UsageRights)
     */
    include: string[];
    /**
     * When a user replaces a file during upload, Canvas keeps track of the
     * "replacement chain."
     *
     * Include this parameter if you wish Canvas to follow the replacement chain
     * if the requested file was deleted and replaced by another.
     *
     * Must be set to 'course' or 'account'. The "replacement_chain_context_id"
     * parameter must also be included.
     */
    replacement_chain_context_type: string;
    /**
     * When a user replaces a file during upload, Canvas keeps track of the
     * "replacement chain."
     *
     * Include this parameter if you wish Canvas to follow the replacement chain
     * if the requested file was deleted and replaced by another.
     *
     * Indicates the context ID Canvas should use when following the
     * "replacement chain." The "replacement_chain_context_type" parameter must
     * also be included.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    replacement_chain_context_id: number | string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get file
 *
 * Returns the standard attachment json object
 *
 * Nickname: get_file_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<File>(
    `/api/v1/courses/{course_id}/files/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
