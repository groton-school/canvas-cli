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
 * Get the results for a single poll session
 *
 * Returns the poll session with the given id
 *
 * Nickname: get_results_for_single_poll_session
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
