import { client } from '../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single poll
 *
 * Returns the poll with the given id
 *
 * Nickname: get_single_poll
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{id}`, {
    method: 'GET',
    pathParams
  });
}
