type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List closed poll sessions
 *
 * A paginated list of all closed poll sessions available to the current user.
 *
 * Nickname: list_closed_poll_sessions
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/poll_sessions/closed`, { method: 'GET', body: parameters })
  ).json();
}
