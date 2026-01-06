import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type mark_all_as_readSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<mark_all_as_readSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_all_as_readSearchParameters;
      strict: true;
    };

/**
 * Mark all as read
 *
 * Mark all conversations as read.
 *
 * Nickname: mark_all_as_read
 */
export async function mark_all_as_read(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/mark_all_as_read`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
