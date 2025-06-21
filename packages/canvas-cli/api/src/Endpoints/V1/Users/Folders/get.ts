import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
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
 * Get folder
 *
 * Returns the details for a folder
 *
 * You can get the root folder from a context by using 'root' as the :id. For
 * example, you could get the root folder for a course like:
 *
 * Nickname: get_folder_users
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Folder>(
    `/api/v1/users/{user_id}/folders/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
