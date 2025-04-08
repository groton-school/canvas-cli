import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Unread count
 *
 * Get the number of unread conversations for the current user
 *
 * Nickname: unread_count
 */
export async function unread_count({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/conversations/unread_count`, {
    method: 'GET',
    params: parameters
  });
}
