import { client } from '../../../../Client.js';

type Options = {};

/**
 * Mark all as read
 *
 * Mark all conversations as read.
 *
 * Nickname: mark_all_as_read
 */
export async function mark_all_as_read({}: Options) {
  return await client().fetchAs<void>(`/v1/conversations/mark_all_as_read`, {
    method: 'POST'
  });
}
