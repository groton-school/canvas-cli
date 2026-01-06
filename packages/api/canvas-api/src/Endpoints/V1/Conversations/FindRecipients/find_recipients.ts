import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type find_recipientsSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<find_recipientsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: find_recipientsSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/find_recipients`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
