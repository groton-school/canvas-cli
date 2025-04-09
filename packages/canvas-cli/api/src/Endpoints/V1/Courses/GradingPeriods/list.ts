import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List grading periods
 *
 * Returns the paginated list of grading periods for the current course.
 *
 * Nickname: list_grading_periods_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/grading_periods`,
    {
      method: 'GET',
      pathParams
    }
  );
}
