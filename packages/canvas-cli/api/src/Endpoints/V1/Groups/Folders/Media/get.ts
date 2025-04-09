import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

type getPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get uploaded media folder for user
 *
 * Returns the details for a designated upload folder that the user has rights
 * to upload to, and creates it if it doesn't exist.
 *
 * If the current user does not have the permissions to manage files in the
 * course or group, the folder will belong to the current user directly.
 *
 * Nickname: get_uploaded_media_folder_for_user_groups
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Folder>(`/v1/groups/{group_id}/folders/media`, {
    method: 'GET',
    pathParams
  });
}
