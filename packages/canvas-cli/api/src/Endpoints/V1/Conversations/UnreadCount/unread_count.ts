import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type unread_countSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<unread_countSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: unread_countSearchParameters;
      strict: true;
    };

/**
 * Unread count
 *
 * Get the number of unread conversations for the current user
 *
 * Nickname: unread_count
 */
export async function unread_count(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/conversations/unread_count`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
