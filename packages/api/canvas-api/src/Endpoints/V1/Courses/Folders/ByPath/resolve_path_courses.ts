import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Folder } from '../../../../../Resources/Files.js';

export type resolve_path_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type resolve_path_coursesSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: resolve_path_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: resolve_path_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<resolve_path_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<resolve_path_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: resolve_path_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: resolve_path_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
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
 * Nickname: resolve_path_courses
 */
export async function resolve_path_courses(options: Options) {
  const response = await client().fetchAs<Folder[]>(
    `/api/v1/courses/{course_id}/folders/by_path`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
