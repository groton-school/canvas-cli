import { client } from '../../../Client.js';

type delete_webhook_subscriptionPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_webhook_subscriptionPathParameters;
};

/**
 * Delete a Webhook Subscription
 *
 * Nickname: delete_webhook_subscription
 */
export async function delete_webhook_subscription({ pathParams }: Options) {
  return await client().fetchAs<void>(`/lti/subscriptions/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
