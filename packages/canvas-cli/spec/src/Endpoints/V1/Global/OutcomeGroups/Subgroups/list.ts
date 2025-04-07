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
 * Nickname: list_subgroups_global
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/global/outcome_groups/{id}/subgroups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
