import { client } from '../../../../../Client.js';

export type mark_bulk_submissions_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
};

export type mark_bulk_submissions_as_read_coursesFormParameters = {
  /** No description */
  submissionIds: string[];
};

type Options = {
  pathParams: mark_bulk_submissions_as_read_coursesPathParameters;
} & (
  | {
      params?: Partial<mark_bulk_submissions_as_read_coursesFormParameters>;
      strict?: false;
    }
  | {
      params: mark_bulk_submissions_as_read_coursesFormParameters;
      strict: true;
    }
);

/**
 * Mark bulk submissions as read
 *
 * Accepts a string array of submission ids. Loops through and marks each
 * submission as read
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_bulk_submissions_as_read_courses
 */
export async function mark_bulk_submissions_as_read_courses({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/submissions/bulk_mark_read`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
