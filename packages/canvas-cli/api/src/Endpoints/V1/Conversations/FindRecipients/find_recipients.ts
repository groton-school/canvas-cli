import { client } from '../../../../Client.js';

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
export async function find_recipients({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/conversations/find_recipients`, {
    method: 'GET',
    params: parameters
  });
}
