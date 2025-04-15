import { client } from '../../../Client.js';

export type show_single_webhook_subscriptionPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_single_webhook_subscriptionPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show a single Webhook Subscription
 *
 * Nickname: show_single_webhook_subscription
 */
export async function show_single_webhook_subscription(options: Options) {
  return await client().fetchAs<void>(`/api/lti/subscriptions/{id}`, {
    method: 'GET',
    ...options
  });
}
