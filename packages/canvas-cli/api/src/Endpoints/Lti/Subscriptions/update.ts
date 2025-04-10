import { client } from '../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function update({ pathParams }: Options) {
  return await client().fetchAs<void>(`/lti/subscriptions/{id}`, {
    method: 'PUT',
    pathParams
  });
}
