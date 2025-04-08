import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single poll choice
 *
 * Returns the poll choice with the given id
 *
 * Nickname: get_single_poll_choice
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices/{id}`, {
    method: 'GET',
    params: parameters
  });
}
