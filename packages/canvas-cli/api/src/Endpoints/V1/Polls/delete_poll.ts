import { client } from '../../../Client.js';

export type delete_pollPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_pollPathParameters;
};

/**
 * Delete a poll
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll
 */
export async function delete_poll({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
