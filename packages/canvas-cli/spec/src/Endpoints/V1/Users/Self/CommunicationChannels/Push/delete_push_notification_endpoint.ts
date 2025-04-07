type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a push notification endpoint
 *
 * Nickname: delete_push_notification_endpoint
 */
export async function delete_push_notification_endpoint({
  parameters
}: Options): Promise<{ success: true }> {
  return await (
    await fetch(`/v1/users/self/communication_channels/push`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
