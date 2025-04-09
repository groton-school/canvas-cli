import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get folder
 *
 * Returns the details for a folder
 *
 * You can get the root folder from a context by using 'root' as the :id. For
 * example, you could get the root folder for a course like:
 *
 * Nickname: get_folder_users
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Folder>(`/v1/users/{user_id}/folders/{id}`, {
    method: 'GET',
    pathParams
  });
}
