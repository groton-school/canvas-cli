import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_grading_period_coursesPathParameters = {
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
  id: string | number;
};

export type delete_grading_period_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: delete_grading_period_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<delete_grading_period_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_grading_period_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_courses
 */
export async function delete_grading_period_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
