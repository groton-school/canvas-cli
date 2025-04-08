import { client } from '../../../Client.js';

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
}: Options) {
  return await client().fetchAs<void>(`/lti/subscriptions/{id}`, {
    method: 'GET',
    params: parameters
  });
}
