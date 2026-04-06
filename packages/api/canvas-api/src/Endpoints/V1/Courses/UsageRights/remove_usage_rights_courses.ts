import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type remove_usage_rights_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type remove_usage_rights_coursesSearchParameters = Masquerade &
  Partial<{
    /** List of ids of files to remove associated usage rights from. */
    file_ids: string[];
    /**
     * List of ids of folders. Usage rights will be removed from all files in
     * these folders.
     */
    folder_ids: string[];
  }>;

type Options = (
  | {
      path: remove_usage_rights_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_usage_rights_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_usage_rights_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<remove_usage_rights_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: remove_usage_rights_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: remove_usage_rights_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_courses
 */
export async function remove_usage_rights_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/usage_rights`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
