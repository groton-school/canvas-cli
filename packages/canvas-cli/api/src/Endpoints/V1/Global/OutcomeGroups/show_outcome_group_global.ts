import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an outcome group
 *
 * Nickname: show_outcome_group_global
 */
export async function show_outcome_group_global({ parameters }: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/v1/global/outcome_groups/{id}`,
    { method: 'GET', params: parameters }
  );
}
