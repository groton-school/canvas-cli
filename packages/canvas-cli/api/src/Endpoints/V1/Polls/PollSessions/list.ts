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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_sessions`, {
    method: 'GET',
    pathParams
  });
}
