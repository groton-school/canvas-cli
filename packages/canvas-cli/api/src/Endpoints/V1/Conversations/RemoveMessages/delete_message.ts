import { client } from '../../../../Client.js';

type delete_messagePathParameters = {
  /** ID */
  id: string;
};

type delete_messageFormParameters = {
  /** Array of message ids to be deleted */
  remove: string[];
};

type Options = {
  pathParams: delete_messagePathParameters;
  params?: delete_messageFormParameters;
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
export async function delete_message({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/conversations/{id}/remove_messages`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
