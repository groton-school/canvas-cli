type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Find recipients
 *
 * Deprecated, see the {api:SearchController#recipients Find recipients
 * endpoint} in the Search API
 *
 * Nickname: find_recipients
 */
export async function find_recipients({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/find_recipients`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
