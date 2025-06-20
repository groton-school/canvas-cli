import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List opened poll sessions
 *
 * A paginated list of all opened poll sessions available to the current user.
 *
 * Nickname: list_opened_poll_sessions
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/poll_sessions/opened`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
