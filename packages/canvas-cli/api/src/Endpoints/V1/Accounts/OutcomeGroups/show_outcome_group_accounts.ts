import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an outcome group
 *
 * Nickname: show_outcome_group_accounts
 */
export async function show_outcome_group_accounts({ parameters }: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/v1/accounts/{account_id}/outcome_groups/{id}`,
    { method: 'GET', params: parameters }
  );
}
