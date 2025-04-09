import { client } from '../../../../Client.js';

type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single grading period
 *
 * Returns the grading period with the given id
 *
 * Nickname: get_single_grading_period
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
