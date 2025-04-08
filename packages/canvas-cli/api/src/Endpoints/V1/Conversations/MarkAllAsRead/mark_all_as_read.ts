import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark all as read
 *
 * Mark all conversations as read.
 *
 * Nickname: mark_all_as_read
 */
export async function mark_all_as_read({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/conversations/mark_all_as_read`, {
    method: 'POST',
    params: parameters
  });
}
