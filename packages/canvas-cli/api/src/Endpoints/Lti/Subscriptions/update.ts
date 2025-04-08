import { client } from '../../../Client.js';

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
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(`/lti/subscriptions/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
