import { client } from '../../../../../../Client.js';

export type mark_submission_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: mark_submission_as_read_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Mark submission as read
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_as_read_courses
 */
export async function mark_submission_as_read_courses(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
}
