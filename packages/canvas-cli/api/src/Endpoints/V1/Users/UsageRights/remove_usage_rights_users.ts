import { client } from '../../../../Client.js';

type remove_usage_rights_usersPathParameters = {
  /** ID */
  user_id: string;
};

type remove_usage_rights_usersSearchParameters = {
  /** List of ids of files to remove associated usage rights from. */
  file_ids: string[];
  /**
   * List of ids of folders. Usage rights will be removed from all files in
   * these folders.
   */
  folder_ids: string[];
};

type Options = {
  pathParams: remove_usage_rights_usersPathParameters;
  searchParams?: remove_usage_rights_usersSearchParameters;
};

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_users
 */
export async function remove_usage_rights_users({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/usage_rights`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
