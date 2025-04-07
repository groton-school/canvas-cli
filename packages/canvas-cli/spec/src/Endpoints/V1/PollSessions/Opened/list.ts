type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List opened poll sessions
 *
 * A paginated list of all opened poll sessions available to the current user.
 *
 * Nickname: list_opened_poll_sessions
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/poll_sessions/opened`, { method: 'GET', body: parameters })
  ).json();
}
