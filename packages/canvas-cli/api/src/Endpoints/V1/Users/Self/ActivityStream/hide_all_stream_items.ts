import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Hide all stream items
 *
 * Hide all stream items for the user
 *
 * Nickname: hide_all_stream_items
 */
export async function hide_all_stream_items({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/activity_stream`, {
    method: 'DELETE',
    params: parameters
  });
}
