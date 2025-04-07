type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single poll submission
 *
 * Returns the poll submission with the given id
 *
 * Nickname: get_single_poll_submission
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions/{id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
