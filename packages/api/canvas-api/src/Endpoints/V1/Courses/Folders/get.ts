import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Folder } from '../../../../Resources/Files.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get folder
 *
 * Returns the details for a folder

You can get the root folder from a context by using 'root' as the :id.
For example, you could get the root folder for a course like:
 *
 * nickname: get_folder_courses
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Folder>(
    `/api/v1/courses/{course_id}/folders/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
