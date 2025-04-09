import { client } from '../../../../Client.js';

type delete_poll_sessionPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_poll_sessionPathParameters;
};

/**
 * Delete a poll session
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_session
 */
export async function delete_poll_session({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
