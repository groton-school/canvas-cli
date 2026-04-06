import { client, Masquerade } from '#client';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The id of the context for the subscription. */
  'subscription[ContextId]': string;
  /**
   * The type of context for the subscription. Must be 'assignment',
   * 'account', or 'course'.
   */
  'subscription[ContextType]': string;
  /**
   * Array of strings representing the event types for the subscription.
   *
   * Array
   */
  'subscription[EventTypes]': string[];
  /** Format to deliver the live events. Must be 'live-event' or 'caliper'. */
  'subscription[Format]': string;
  /**
   * An object with a single key: 'Url'. Example: { "Url": "sqs.example" }
   *
   * Object
   */
  'subscription[TransportMetadata]': JSONObject;
  /** Must be either 'sqs' or 'https'. */
  'subscription[TransportType]': string;
};

type Options =
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<createSearchParameters>;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: createSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: createSearchParameters;
        }
    ) &
      (
        | {
            body: createFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: createFormParameters;
          }
      ) & {
        strict: true;
      });

/**
 * Create a Webhook Subscription
 *
 * Creates a webook subscription for the specified event type and context.
 *
 * Nickname: create_webhook_subscription
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/lti/subscriptions`, {
    method: 'POST',
    ...options
  });
  return response;
}
