import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
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
   * Format: 'int64'
   */
  replacement_chain_context_id: number;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get file
 *
 * Returns the standard attachment json object
 *
 * Nickname: get_file_groups
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<File>(`/v1/groups/{group_id}/files/{id}`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
