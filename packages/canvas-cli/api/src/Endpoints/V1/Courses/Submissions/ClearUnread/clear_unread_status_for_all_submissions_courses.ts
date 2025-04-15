import { client } from '../../../../../Client.js';

export type clear_unread_status_for_all_submissions_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: clear_unread_status_for_all_submissions_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/submissions/{user_id}/clear_unread`,
    {
      method: 'PUT',
      ...options
    }
  );
}
