import { client } from '../../../../../../Client.js';

type Options = {};

/**
 * Delete a push notification endpoint
 *
 * Nickname: delete_push_notification_endpoint
 */
export async function delete_push_notification_endpoint({}: Options) {
  return await client().fetchAs<{ success: true }>(
    `/v1/users/self/communication_channels/push`,
    {
      method: 'DELETE'
    }
  );
}
