import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a poll
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll
 */
export async function delete_poll({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
