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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/conversations`, { method: 'GET', body: parameters })
  ).json();
}
