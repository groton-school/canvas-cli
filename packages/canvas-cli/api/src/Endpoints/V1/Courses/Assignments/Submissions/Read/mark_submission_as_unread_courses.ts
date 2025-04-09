import { client } from '../../../../../../Client.js';

type mark_submission_as_unread_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: mark_submission_as_unread_coursesPathParameters;
};

/**
 * Mark submission as unread
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_as_unread_courses
 */
export async function mark_submission_as_unread_courses({
  pathParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
