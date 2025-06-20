import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  poll_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List poll sessions for a poll
 *
 * Returns the paginated list of PollSessions in this poll.
 *
 * Nickname: list_poll_sessions_for_poll
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
