type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Open a poll session
 *
 * Nickname: open_poll_session
 */
export async function open_poll_session({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_sessions/{id}/open`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
