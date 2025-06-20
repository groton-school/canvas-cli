import { client } from '../../../../Client.js';

export type delete_poll_sessionPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_poll_sessionPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a poll session
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_session
 */
export async function delete_poll_session(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
