import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type show_single_webhook_subscriptionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_single_webhook_subscriptionSearchParameters = Masquerade;

type Options = {
  pathParams: show_single_webhook_subscriptionPathParameters;
} & (
  | {
      searchParams?: Partial<show_single_webhook_subscriptionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_single_webhook_subscriptionSearchParameters;
      strict: true;
    }
);

/**
 * Show a single Webhook Subscription
 *
 * Nickname: show_single_webhook_subscription
 */
export async function show_single_webhook_subscription(options: Options) {
  const response = await client().fetchAs<void>(`/api/lti/subscriptions/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
