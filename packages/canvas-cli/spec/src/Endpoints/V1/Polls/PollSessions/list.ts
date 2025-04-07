type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List poll sessions for a poll
 *
 * Returns the paginated list of PollSessions in this poll.
 *
 * Nickname: list_poll_sessions_for_poll
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_sessions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
