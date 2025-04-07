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
 * Nickname: get_uploaded_media_folder_for_user_courses
 */
export async function get({ parameters }: Options): Promise<Folder> {
  return await (
    await fetch(`/v1/courses/{course_id}/folders/media`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
