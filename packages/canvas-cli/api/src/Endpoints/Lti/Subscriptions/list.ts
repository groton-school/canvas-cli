import { client } from '../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List all Webhook Subscription for a tool proxy
 *
 * This endpoint returns a paginated list with a default limit of 100 items per
 * result set. You can retrieve the next result set by setting a 'StartKey'
 * header in your next request with the value of the 'EndKey' header in the
 * response.
 *
 * Example use of a 'StartKey' header object: {
 * "Id":"71d6dfba-0547-477d-b41d-db8cb528c6d1","DeveloperKey":"10000000000001"
 * }
 *
 * Nickname: list_all_webhook_subscription_for_tool_proxy
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(`/api/lti/subscriptions`, {
    method: 'GET',
    ...options
  });
  return response;
}
