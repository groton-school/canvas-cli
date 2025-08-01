import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type open_poll_sessionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type open_poll_sessionSearchParameters = Masquerade;

type Options = {
  pathParams: open_poll_sessionPathParameters;
} & (
  | {
      searchParams?: Partial<open_poll_sessionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: open_poll_sessionSearchParameters;
      strict: true;
    }
);

/**
 * Open a poll session
 *
 * Nickname: open_poll_session
 */
export async function open_poll_session(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}/open`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
