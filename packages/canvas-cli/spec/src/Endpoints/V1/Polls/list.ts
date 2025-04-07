type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List polls
 *
 * Returns the paginated list of polls for the current user.
 *
 * Nickname: list_polls
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls`, { method: 'GET', body: parameters })
  ).json();
}
