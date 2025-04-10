import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Get running batches
 *
 * Returns any currently running conversation batches for the current user.
 * Conversation batches are created when a bulk private message is sent
 * asynchronously (see the mode argument to the
 * {api:ConversationsController#create create API action}).
 *
 * Nickname: get_running_batches
 */
export async function get({}: Options) {
  return await client().fetchAs<void>(`/v1/conversations/batches`, {
    method: 'GET'
  });
}
