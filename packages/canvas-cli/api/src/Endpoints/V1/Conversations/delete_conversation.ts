import { client } from '../../../Client.js';

export type delete_conversationPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_conversationPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(`/api/v1/conversations/{id}`, {
    method: 'DELETE',
    ...options
  });
}
