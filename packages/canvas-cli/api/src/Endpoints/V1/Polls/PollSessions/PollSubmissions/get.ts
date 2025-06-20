import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  poll_session_id: string;
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
 * Get a single poll submission
 *
 * Returns the poll submission with the given id
 *
 * Nickname: get_single_poll_submission
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
