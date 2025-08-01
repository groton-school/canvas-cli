import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type delete_poll_sessionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_poll_sessionSearchParameters = Masquerade;

type Options = {
  pathParams: delete_poll_sessionPathParameters;
} & (
  | {
      searchParams?: Partial<delete_poll_sessionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_poll_sessionSearchParameters;
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
