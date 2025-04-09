import { client } from '../../../../../Client.js';

export type close_opened_poll_sessionPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: close_opened_poll_sessionPathParameters;
};

/**
 * Close an opened poll session
 *
 * Nickname: close_opened_poll_session
 */
export async function close_opened_poll_session({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}/close`,
    {
      method: 'GET',
      pathParams
    }
  );
}
