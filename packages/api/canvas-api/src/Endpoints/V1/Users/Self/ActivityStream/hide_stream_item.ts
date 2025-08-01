import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type hide_stream_itemPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type hide_stream_itemSearchParameters = Masquerade;

type Options = {
  pathParams: hide_stream_itemPathParameters;
} & (
  | {
      searchParams?: Partial<hide_stream_itemSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: hide_stream_itemSearchParameters;
      strict: true;
    }
);

/**
 * Hide a stream item
 *
 * Hide the given stream item.
 *
 * Nickname: hide_stream_item
 */
export async function hide_stream_item(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/activity_stream/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
