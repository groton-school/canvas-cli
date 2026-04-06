import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_webhook_subscriptionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_webhook_subscriptionSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_webhook_subscriptionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_webhook_subscriptionPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_webhook_subscriptionSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_webhook_subscriptionSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_webhook_subscriptionSearchParameters>;
        /** @deprecated Use {Options.query} */
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
