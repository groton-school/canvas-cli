import { client } from '../../../../../Client.js';

export type createPathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  poll_session_id: string;
};

export type createFormParameters = {
  /**
   * The chosen poll choice for this submission.
   *
   * Format: 'int64'
   */
  'poll_submissions[poll_choice_id]': number[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a single poll submission
 *
 * Create a new poll submission for this poll session
 *
 * Nickname: create_single_poll_submission
 */
export async function create(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions`,
    {
      method: 'POST',
      ...options
    }
  );
}
