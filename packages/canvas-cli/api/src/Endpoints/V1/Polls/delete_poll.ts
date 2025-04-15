import { client } from '../../../Client.js';

export type delete_pollPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_pollPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a poll
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll
 */
export async function delete_poll(options: Options) {
  return await client().fetchAs<void>(`/api/v1/polls/{id}`, {
    method: 'DELETE',
    ...options
  });
}
