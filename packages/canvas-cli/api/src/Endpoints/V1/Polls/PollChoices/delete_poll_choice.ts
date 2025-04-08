import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a poll choice
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_choice
 */
export async function delete_poll_choice({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
