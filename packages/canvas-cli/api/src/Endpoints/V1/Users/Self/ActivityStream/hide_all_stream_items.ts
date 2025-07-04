import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type hide_all_stream_itemsSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<hide_all_stream_itemsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: hide_all_stream_itemsSearchParameters;
      strict: true;
    };

/**
 * Hide all stream items
 *
 * Hide all stream items for the user
 *
 * Nickname: hide_all_stream_items
 */
export async function hide_all_stream_items(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/activity_stream`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
