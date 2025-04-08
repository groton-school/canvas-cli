import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List opened poll sessions
 *
 * A paginated list of all opened poll sessions available to the current user.
 *
 * Nickname: list_opened_poll_sessions
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/poll_sessions/opened`, {
    method: 'GET',
    params: parameters
  });
}
