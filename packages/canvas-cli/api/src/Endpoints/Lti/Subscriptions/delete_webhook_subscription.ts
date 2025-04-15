import { client } from '../../../Client.js';

export type delete_webhook_subscriptionPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_webhook_subscriptionPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a Webhook Subscription
 *
 * Nickname: delete_webhook_subscription
 */
export async function delete_webhook_subscription(options: Options) {
  return await client().fetchAs<void>(`/api/lti/subscriptions/{id}`, {
    method: 'DELETE',
    ...options
  });
}
