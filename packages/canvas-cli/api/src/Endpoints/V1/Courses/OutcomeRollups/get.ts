import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get outcome result rollups
 *
 * Gets the outcome rollups for the users and outcomes in the specified context.
 *
 * Nickname: get_outcome_result_rollups
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/outcome_rollups`,
    { method: 'GET', params: parameters }
  );
}
