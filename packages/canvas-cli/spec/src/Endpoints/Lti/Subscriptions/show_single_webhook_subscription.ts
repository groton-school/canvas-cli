type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a single Webhook Subscription
 *
 * Nickname: show_single_webhook_subscription
 */
export async function show_single_webhook_subscription({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/lti/subscriptions/{id}`, { method: 'GET', body: parameters })
  ).json();
}
