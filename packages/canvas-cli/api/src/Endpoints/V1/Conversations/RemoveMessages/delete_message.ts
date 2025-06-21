import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_messagePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_messageSearchParameters = Masquerade;

export type delete_messageFormParameters = Masquerade & {
  /** Array of message ids to be deleted */
  remove: string[];
};

type Options = {
  pathParams: delete_messagePathParameters;
} & (
  | {
      searchParams?: Partial<delete_messageSearchParameters>;
      params?: Partial<delete_messageFormParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_messageSearchParameters;
      params: delete_messageFormParameters;
      strict: true;
    }
);

/**
 * Delete a message
 *
 * Delete messages from this conversation. Note that this only affects this
 * user's view of the conversation. If all messages are deleted, the
 * conversation will be as well (equivalent to DELETE)
 *
 * Nickname: delete_message
 */
export async function delete_message(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/conversations/{id}/remove_messages`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
