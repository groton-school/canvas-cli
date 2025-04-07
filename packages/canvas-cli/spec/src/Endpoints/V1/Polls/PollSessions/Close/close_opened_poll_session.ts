type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Close an opened poll session
 *
 * Nickname: close_opened_poll_session
 */
export async function close_opened_poll_session({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_sessions/{id}/close`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
