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
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_sessions/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
