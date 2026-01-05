import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { AsyncQueryStatusResponse } from '../../../../../Resources/Users.js';

export type beta_poll_query_statusPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * The UUID of the query to check status for
   *
   * Type: string
   */
  query_id: string | number;
};

export type beta_poll_query_statusSearchParameters = Masquerade;

type Options = {
  pathParams: beta_poll_query_statusPathParameters;
} & (
  | {
      searchParams?: Partial<beta_poll_query_statusSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: beta_poll_query_statusSearchParameters;
      strict: true;
    }
);

/**
 * BETA - Poll query status
 *
 * Checks the status of a previously initiated page views query. Returns the
 * current processing status and provides a result URL when the query is
 * complete.
 *
 * As this is a beta endpoint, it is subject to change or removal at any time
 * without the standard notice periods outlined in the API policy.
 *
 * Nickname: beta_poll_query_status
 */
export async function beta_poll_query_status(options: Options) {
  const response = await client().fetchAs<AsyncQueryStatusResponse>(
    `/api/v1/users/{user_id}/page_views/query/{query_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
