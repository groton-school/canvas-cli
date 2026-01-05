import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type mark_submission_as_unread_coursesPathParameters = {
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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type mark_submission_as_unread_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: mark_submission_as_unread_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<mark_submission_as_unread_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_submission_as_unread_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Mark submission as unread
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_as_unread_courses
 */
export async function mark_submission_as_unread_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
