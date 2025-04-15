import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function get(options: Options) {
  return await client().fetchAs<Folder>(
    `/api/v1/courses/{course_id}/folders/media`,
    {
      method: 'GET',
      ...options
    }
  );
}
