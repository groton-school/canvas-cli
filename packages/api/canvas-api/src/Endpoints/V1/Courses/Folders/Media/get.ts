import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type getSearchParameters = Masquerade;

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
  const response = await client().fetchAs<Folder>(
    `/api/v1/courses/{course_id}/folders/media`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
