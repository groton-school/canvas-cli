import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(`/api/v1/conversations/unread_count`, {
    method: 'GET',
    ...options
  });
}
