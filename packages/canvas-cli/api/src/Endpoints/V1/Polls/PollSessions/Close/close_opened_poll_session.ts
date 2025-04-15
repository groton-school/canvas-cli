import { client } from '../../../../../Client.js';

export type close_opened_poll_sessionPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: close_opened_poll_sessionPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Close an opened poll session
 *
 * Nickname: close_opened_poll_session
 */
export async function close_opened_poll_session(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}/close`,
    {
      method: 'GET',
      ...options
    }
  );
}
