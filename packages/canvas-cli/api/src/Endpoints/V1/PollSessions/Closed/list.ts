import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List closed poll sessions
 *
 * A paginated list of all closed poll sessions available to the current user.
 *
 * Nickname: list_closed_poll_sessions
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/poll_sessions/closed`, {
    method: 'GET',
    params: parameters
  });
}
