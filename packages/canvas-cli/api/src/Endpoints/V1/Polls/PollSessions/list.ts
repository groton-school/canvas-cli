import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List poll sessions for a poll
 *
 * Returns the paginated list of PollSessions in this poll.
 *
 * Nickname: list_poll_sessions_for_poll
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_sessions`, {
    method: 'GET',
    params: parameters
  });
}
