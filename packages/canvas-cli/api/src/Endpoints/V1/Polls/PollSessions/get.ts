import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the results for a single poll session
 *
 * Returns the poll session with the given id
 *
 * Nickname: get_results_for_single_poll_session
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}`,
    { method: 'GET', params: parameters }
  );
}
