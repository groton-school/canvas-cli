import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  poll_id: string;
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
 * Get a single poll choice
 *
 * Returns the poll choice with the given id
 *
 * Nickname: get_single_poll_choice
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_choices/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
