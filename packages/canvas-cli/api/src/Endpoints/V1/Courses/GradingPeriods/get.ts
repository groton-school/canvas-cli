import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single grading period
 *
 * Returns the grading period with the given id
 *
 * Nickname: get_single_grading_period
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/grading_periods/{id}`,
    { method: 'GET', params: parameters }
  );
}
