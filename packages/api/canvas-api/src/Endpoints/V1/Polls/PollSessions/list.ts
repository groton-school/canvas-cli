import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
};

export type listSearchParameters = Masquerade;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List poll sessions for a poll
 *
 * Returns the paginated list of PollSessions in this poll.
 *
 * Nickname: list_poll_sessions_for_poll
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_sessions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
