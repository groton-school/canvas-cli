import { client } from '../../../../Client.js';

type getPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single poll choice
 *
 * Returns the poll choice with the given id
 *
 * Nickname: get_single_poll_choice
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_choices/{id}`, {
    method: 'GET',
    pathParams
  });
}
