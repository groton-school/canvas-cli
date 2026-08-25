import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The id of the context for the subscription.
   *
   *
   *
   *
   */
  'subscription[ContextId]': string;
  /**
     * The type of context for the subscription. Must be &#x27;assignment&#x27;,
&#x27;account&#x27;, or &#x27;course&#x27;.
     *
     * 
     *
     * 
     */
  'subscription[ContextType]': string;
  /**
     * Array of strings representing the event types for
the subscription.
     *
     * Array
     *
     * 
     */
  'subscription[EventTypes]': string[];
  /**
   * Format to deliver the live events. Must be &#x27;live-event&#x27; or &#x27;caliper&#x27;.
   *
   *
   *
   *
   */
  'subscription[Format]': string;
  /**
   * An object with a single key: &#x27;Url&#x27;. Example: { &quot;Url&quot;: &quot;sqs.example&quot; }
   *
   * Object
   *
   *
   */
  'subscription[TransportMetadata]': JSONObject;
  /**
   * Must be either &#x27;sqs&#x27; or &#x27;https&#x27;.
   *
   *
   *
   *
   */
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
 * Creates a webook subscription for the specified event type and
context.
 *
 * nickname: create_webhook_subscription
 *
 * 
 *
 * 
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/lti/subscriptions`, {
    method: 'POST',
    ...options
  });
  return response;
}
