import { client } from '../../../Client.js';
import { Conversation } from '../../../Resources/Conversations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List conversations
 *
 * Returns the paginated list of conversations for the current user, most recent
 * ones first.
 *
 * Nickname: list_conversations
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/conversations`, {
    method: 'GET',
    params: parameters
  });
}
