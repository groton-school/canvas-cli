import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

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
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    };

/**
 * Create a Webhook Subscription
 *
 * Creates a webook subscription for the specified event type and context.
 *
 * Nickname: create_webhook_subscription
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(`/api/lti/subscriptions`, {
    method: 'POST',
    ...options
  });
  return response;
}
