type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Update a Webhook Subscription
 *
 * This endpoint uses the same parameters as the create endpoint
 *
 * Nickname: update_webhook_subscription
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/lti/subscriptions/{id}`, { method: 'PUT', body: parameters })
  ).json();
}
