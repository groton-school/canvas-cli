import { client } from '../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single poll
 *
 * Returns the poll with the given id
 *
 * Nickname: get_single_poll
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/polls/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
