import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Find recipients
 *
 * Deprecated, see the {api:SearchController#recipients Find recipients
 * endpoint} in the Search API
 *
 * Nickname: find_recipients
 */
export async function find_recipients(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/conversations/find_recipients`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
