import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all outcome groups for context
 *
 * Nickname: get_all_outcome_groups_for_context_accounts
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/outcome_groups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
