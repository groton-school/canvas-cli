import { client } from '../../../../Client.js';

type Parameters = {
  /** Array of message ids to be deleted */
  remove: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a message
 *
 * Delete messages from this conversation. Note that this only affects this
 * user's view of the conversation. If all messages are deleted, the
 * conversation will be as well (equivalent to DELETE)
 *
 * Nickname: delete_message
 */
export async function delete_message({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/conversations/{id}/remove_messages`,
    { method: 'POST', params: parameters }
  );
}
