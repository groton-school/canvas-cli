import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * Nickname: list_subgroups_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/outcome_groups/{id}/subgroups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
