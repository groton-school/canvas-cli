import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Webhook Subscription
 *
 * Nickname: delete_webhook_subscription
 */
export async function delete_webhook_subscription({ parameters }: Options) {
  return await client().fetchAs<void>(`/lti/subscriptions/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
