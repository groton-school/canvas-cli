import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Folder } from '../../../../../Resources/Files.js';

export type resolve_path_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type resolve_path_usersSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: resolve_path_usersPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: resolve_path_usersPathParameters;
    }
) &
  (
    | {
        query?: Partial<resolve_path_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<resolve_path_usersSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<resolve_path_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: resolve_path_usersSearchParameters;
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
  const response = await client().fetchAs<Folder[]>(
    `/api/v1/users/{user_id}/folders/by_path`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
