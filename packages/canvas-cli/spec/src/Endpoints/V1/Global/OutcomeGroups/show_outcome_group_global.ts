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
export async function show_outcome_group_global({
  parameters
}: Options): Promise<OutcomeGroup> {
  return await (
    await fetch(`/v1/global/outcome_groups/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
