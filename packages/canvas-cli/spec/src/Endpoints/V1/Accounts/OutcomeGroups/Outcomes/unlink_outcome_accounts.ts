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
 * Nickname: unlink_outcome_accounts
 */
export async function unlink_outcome_accounts({
  parameters
}: Options): Promise<OutcomeLink> {
  return await (
    await fetch(
      `/v1/accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
