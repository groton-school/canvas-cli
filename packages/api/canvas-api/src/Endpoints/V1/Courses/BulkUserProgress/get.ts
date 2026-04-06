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
 * Get bulk user progress
 *
 * Returns progress information for all users enrolled in the given course.
 *
 * You must be a user who has permission to view all grades in the course (such
 * as a teacher or administrator).
 *
 * Nickname: get_bulk_user_progress
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/bulk_user_progress`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
