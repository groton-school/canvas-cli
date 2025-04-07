type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single conversation
 *
 * Returns information for a single conversation for the current user. Response
 * includes all fields that are present in the list/index action as well as
 * messages and extended participant information.
 *
 * Nickname: get_single_conversation
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/{id}`, { method: 'GET', body: parameters })
  ).json();
}
