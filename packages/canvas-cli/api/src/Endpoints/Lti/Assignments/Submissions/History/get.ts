import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the history of a single submission
 *
 * Get a list of all attempts made for a submission, based on submission id.
 *
 * Nickname: get_history_of_single_submission
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/lti/assignments/{assignment_id}/submissions/{submission_id}/history`,
    { method: 'GET', params: parameters }
  );
}
