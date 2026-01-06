import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type delete_webhook_subscriptionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_webhook_subscriptionSearchParameters = Masquerade;

type Options = {
  pathParams: delete_webhook_subscriptionPathParameters;
} & (
  | {
      searchParams?: Partial<delete_webhook_subscriptionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_webhook_subscriptionSearchParameters;
      strict: true;
    }
);

/**
 * Delete a Webhook Subscription
 *
 * Nickname: delete_webhook_subscription
 */
export async function delete_webhook_subscription(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/lti/subscriptions/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
