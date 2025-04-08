import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function get({ parameters }: Options) {
  return await client().fetchAs<Folder>(`/v1/groups/{group_id}/folders/media`, {
    method: 'GET',
    params: parameters
  });
}
