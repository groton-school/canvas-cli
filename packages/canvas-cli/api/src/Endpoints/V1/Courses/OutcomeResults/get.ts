import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get outcome results
 *
 * Gets the outcome results for users and outcomes in the specified context.
 *
 * Used in sLMGB
 *
 * Nickname: get_outcome_results
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/outcome_results`,
    { method: 'GET', params: parameters }
  );
}
