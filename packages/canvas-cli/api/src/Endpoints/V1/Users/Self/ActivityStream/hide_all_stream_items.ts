import { client } from '../../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Hide all stream items
 *
 * Hide all stream items for the user
 *
 * Nickname: hide_all_stream_items
 */
export async function hide_all_stream_items({}: Options) {
  return await client().fetchAs<void>(`/v1/users/self/activity_stream`, {
    method: 'DELETE'
  });
}
