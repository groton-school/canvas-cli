import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type close_opened_poll_sessionPathParameters = {
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

export type close_opened_poll_sessionSearchParameters = Masquerade;

type Options = {
  pathParams: close_opened_poll_sessionPathParameters;
} & (
  | {
      searchParams?: Partial<close_opened_poll_sessionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: close_opened_poll_sessionSearchParameters;
      strict: true;
    }
);

/**
 * Close an opened poll session
 *
 * Nickname: close_opened_poll_session
 */
export async function close_opened_poll_session(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}/close`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
