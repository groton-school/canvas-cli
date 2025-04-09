import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../Client.js';

type createFormParameters = {
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

type Options = {
  params?: createFormParameters;
};

/**
 * Create a Webhook Subscription
 *
 * Creates a webook subscription for the specified event type and context.
 *
 * Nickname: create_webhook_subscription
 */
export async function create({ params }: Options) {
  return await client().fetchAs<void>(`/lti/subscriptions`, {
    method: 'POST',
    params
  });
}
