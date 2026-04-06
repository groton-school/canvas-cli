import { client, Masquerade } from '#client';

export type delete_push_notification_endpointSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<delete_push_notification_endpointSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<delete_push_notification_endpointSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: delete_push_notification_endpointSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: delete_push_notification_endpointSearchParameters;
        }
    ) & {
      strict: true;
    });

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
