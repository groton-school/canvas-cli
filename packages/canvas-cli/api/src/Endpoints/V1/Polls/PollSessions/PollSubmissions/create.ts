import { client } from '../../../../../Client.js';

type Parameters = {
  /**
   * The chosen poll choice for this submission.
   *
   * Format: 'int64'
   */
  'poll_submissions[poll_choice_id]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a single poll submission
 *
 * Create a new poll submission for this poll session
 *
 * Nickname: create_single_poll_submission
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions`,
    { method: 'POST', params: parameters }
  );
}
