import { client } from '../../../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Delete a push notification endpoint
 *
 * Nickname: delete_push_notification_endpoint
 */
export async function delete_push_notification_endpoint(options: Options) {
  return await client().fetchAs<{ success: true }>(
    `/api/v1/users/self/communication_channels/push`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
