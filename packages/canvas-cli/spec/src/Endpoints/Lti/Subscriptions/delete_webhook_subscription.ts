type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Webhook Subscription
 *
 * Nickname: delete_webhook_subscription
 */
export async function delete_webhook_subscription({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/lti/subscriptions/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
