import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type delete_push_notification_endpointSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<delete_push_notification_endpointSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_push_notification_endpointSearchParameters;
      strict: true;
    };

/**
 * Delete a push notification endpoint
 *
 * Nickname: delete_push_notification_endpoint
 */
export async function delete_push_notification_endpoint(options: Options) {
  const response = await client().fetchAs<{ success: true }>(
    `/api/v1/users/self/communication_channels/push`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
