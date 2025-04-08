import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single submission by anonymous id
 *
 * Get a single submission, based on the submission's anonymous id.
 *
 * Nickname: get_single_submission_by_anonymous_id_sections
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}`,
    { method: 'GET', params: parameters }
  );
}
