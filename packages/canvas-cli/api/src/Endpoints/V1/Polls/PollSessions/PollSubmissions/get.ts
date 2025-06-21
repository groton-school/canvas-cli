import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  poll_session_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
