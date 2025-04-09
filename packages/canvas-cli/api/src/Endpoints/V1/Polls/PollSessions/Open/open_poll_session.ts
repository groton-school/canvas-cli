import { client } from '../../../../../Client.js';

type open_poll_sessionPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: open_poll_sessionPathParameters;
};

/**
 * Open a poll session
 *
 * Nickname: open_poll_session
 */
export async function open_poll_session({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}/open`,
    {
      method: 'GET',
      pathParams
    }
  );
}
