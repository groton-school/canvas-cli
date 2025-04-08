import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Open a poll session
 *
 * Nickname: open_poll_session
 */
export async function open_poll_session({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}/open`,
    { method: 'GET', params: parameters }
  );
}
