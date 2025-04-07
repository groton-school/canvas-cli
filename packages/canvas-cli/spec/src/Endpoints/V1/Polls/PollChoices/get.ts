type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single poll choice
 *
 * Returns the poll choice with the given id
 *
 * Nickname: get_single_poll_choice
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_choices/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
