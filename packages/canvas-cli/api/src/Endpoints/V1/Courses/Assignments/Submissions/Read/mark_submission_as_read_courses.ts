import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type mark_submission_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

export type mark_submission_as_read_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: mark_submission_as_read_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<mark_submission_as_read_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_submission_as_read_coursesSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
