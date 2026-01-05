import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

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

type Options = {
  pathParams: clear_unread_status_for_all_submissions_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<clear_unread_status_for_all_submissions_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: clear_unread_status_for_all_submissions_coursesSearchParameters;
      strict: true;
    }
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
