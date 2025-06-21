import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Update a Webhook Subscription
 *
 * This endpoint uses the same parameters as the create endpoint
 *
 * Nickname: update_webhook_subscription
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(`/api/lti/subscriptions/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
