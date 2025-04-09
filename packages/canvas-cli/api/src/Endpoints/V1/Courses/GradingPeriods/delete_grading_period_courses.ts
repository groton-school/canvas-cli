import { client } from '../../../../Client.js';

type delete_grading_period_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_grading_period_coursesPathParameters;
};

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_courses
 */
export async function delete_grading_period_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
