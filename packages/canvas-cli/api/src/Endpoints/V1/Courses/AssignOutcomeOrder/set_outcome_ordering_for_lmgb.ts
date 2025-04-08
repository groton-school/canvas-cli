import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Set outcome ordering for LMGB
 *
 * Saves the ordering of outcomes in LMGB for a user
 *
 * Nickname: set_outcome_ordering_for_lmgb
 */
export async function set_outcome_ordering_for_lmgb({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assign_outcome_order`,
    { method: 'POST', params: parameters }
  );
}
