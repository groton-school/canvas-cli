type Parameters = {
  /** The id of the context for the subscription. */
  'subscription[ContextId]': string;
  /**
   * The type of context for the subscription. Must be 'assignment',
   * 'account', or 'course'.
   */
  'subscription[ContextType]': string;
  /** Array of strings representing the event types for the subscription. */
  'subscription[EventTypes]': string[];
  /** Format to deliver the live events. Must be 'live-event' or 'caliper'. */
  'subscription[Format]': string;
  /** An object with a single key: 'Url'. Example: { "Url": "sqs.example" } */
  'subscription[TransportMetadata]': object;
  /** Must be either 'sqs' or 'https'. */
  'subscription[TransportType]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a Webhook Subscription
 *
 * Creates a webook subscription for the specified event type and context.
 *
 * Nickname: create_webhook_subscription
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/lti/subscriptions`, { method: 'POST', body: parameters })
  ).json();
}
