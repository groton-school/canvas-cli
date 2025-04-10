import { client } from '../../../../../Client.js';

export type hide_stream_itemPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: hide_stream_itemPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function hide_stream_item({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/activity_stream/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
