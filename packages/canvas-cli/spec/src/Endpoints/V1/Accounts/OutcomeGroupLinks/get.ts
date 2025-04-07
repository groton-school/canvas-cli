import { OutcomeLink } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all outcome links for context
 *
 * Nickname: get_all_outcome_links_for_context_accounts
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/outcome_group_links`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
