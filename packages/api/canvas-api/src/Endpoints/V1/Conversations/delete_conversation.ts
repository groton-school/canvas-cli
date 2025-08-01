import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type delete_conversationPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_conversationSearchParameters = Masquerade;

type Options = {
  pathParams: delete_conversationPathParameters;
} & (
  | {
      searchParams?: Partial<delete_conversationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_conversationSearchParameters;
      strict: true;
    }
);

/**
 * Delete a conversation
 *
 * Delete this conversation and its messages. Note that this only deletes this
 * user's view of the conversation.
 *
 * Response includes same fields as UPDATE action
 *
 * Nickname: delete_conversation
 */
export async function delete_conversation(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/conversations/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
