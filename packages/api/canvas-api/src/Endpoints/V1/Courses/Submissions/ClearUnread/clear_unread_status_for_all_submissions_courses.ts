import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type clear_unread_status_for_all_submissions_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type clear_unread_status_for_all_submissions_coursesSearchParameters =
  Masquerade;

type Options = (
  | {
      path: clear_unread_status_for_all_submissions_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: clear_unread_status_for_all_submissions_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<clear_unread_status_for_all_submissions_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<clear_unread_status_for_all_submissions_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: clear_unread_status_for_all_submissions_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: clear_unread_status_for_all_submissions_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Clear unread status for all submissions.
 *
 * Site-admin-only endpoint.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: clear_unread_status_for_all_submissions_courses
 */
export async function clear_unread_status_for_all_submissions_courses(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/submissions/{user_id}/clear_unread`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
