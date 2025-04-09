import { client } from '../../../../Client.js';

type Options = {};

/**
 * Unread count
 *
 * Get the number of unread conversations for the current user
 *
 * Nickname: unread_count
 */
export async function unread_count({}: Options) {
  return await client().fetchAs<void>(`/v1/conversations/unread_count`, {
    method: 'GET'
  });
}
