import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

export type resolve_path_usersPathParameters = {
  /** ID */
  user_id: string;
};

export type resolve_path_usersSearchParameters = Paginated;

type Options = {
  pathParams: resolve_path_usersPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Resolve path
 *
 * Given the full path to a folder, returns a list of all Folders in the path
 * hierarchy, starting at the root folder, and ending at the requested folder.
 * The given path is relative to the context's root folder and does not include
 * the root folder's name (e.g., "course files"). If an empty path is given, the
 * context's root folder alone is returned. Otherwise, if no folder exists with
 * the given full path, a Not Found error is returned.
 *
 * Nickname: resolve_path_users
 */
export async function resolve_path_users(options: Options) {
  return await client().fetchAs<Folder[]>(
    `/api/v1/users/{user_id}/folders/by_path`,
    {
      method: 'GET',
      ...options
    }
  );
}
