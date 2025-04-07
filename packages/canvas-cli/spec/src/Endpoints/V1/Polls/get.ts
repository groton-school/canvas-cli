type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single poll
 *
 * Returns the poll with the given id
 *
 * Nickname: get_single_poll
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{id}`, { method: 'GET', body: parameters })
  ).json();
}
