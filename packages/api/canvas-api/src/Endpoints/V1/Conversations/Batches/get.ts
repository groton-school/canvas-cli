import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type getSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get running batches
 *
 * Returns any currently running conversation batches for the current user.
 * Conversation batches are created when a bulk private message is sent
 * asynchronously (see the mode argument to the
 * {api:ConversationsController#create create API action}).
 *
 * Nickname: get_running_batches
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/batches`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
