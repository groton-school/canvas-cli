import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
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
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/files/quota`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
