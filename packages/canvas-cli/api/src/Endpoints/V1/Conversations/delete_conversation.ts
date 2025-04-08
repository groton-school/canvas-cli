import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function delete_conversation({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/conversations/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
