import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type show_single_webhook_subscriptionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_single_webhook_subscriptionSearchParameters = Masquerade;

type Options = (
  | {
      path: show_single_webhook_subscriptionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_single_webhook_subscriptionPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_single_webhook_subscriptionSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_single_webhook_subscriptionSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_single_webhook_subscriptionSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_single_webhook_subscriptionSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show a single Webhook Subscription
 *
 * Nickname: show_single_webhook_subscription
 */
export async function show_single_webhook_subscription(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/lti/subscriptions/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
