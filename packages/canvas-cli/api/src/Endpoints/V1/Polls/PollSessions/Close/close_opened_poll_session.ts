import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Close an opened poll session
 *
 * Nickname: close_opened_poll_session
 */
export async function close_opened_poll_session({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}/close`,
    { method: 'GET', params: parameters }
  );
}
