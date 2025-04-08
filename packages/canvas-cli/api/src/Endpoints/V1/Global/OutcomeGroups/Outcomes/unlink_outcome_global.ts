import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
 * link to the outcome in any group in any context. Aligned outcomes cannot be
 * deleted; as such, if this is the last link to an aligned outcome, the
 * unlinking will fail.
 *
 * Nickname: unlink_outcome_global
 */
export async function unlink_outcome_global({ parameters }: Options) {
  return await client().fetchAs<OutcomeLink>(
    `/v1/global/outcome_groups/{id}/outcomes/{outcome_id}`,
    { method: 'DELETE', params: parameters }
  );
}
