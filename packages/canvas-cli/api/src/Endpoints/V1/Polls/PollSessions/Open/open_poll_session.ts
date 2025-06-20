import { client } from '../../../../../Client.js';

export type open_poll_sessionPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: open_poll_sessionPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Open a poll session
 *
 * Nickname: open_poll_session
 */
export async function open_poll_session(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}/open`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
