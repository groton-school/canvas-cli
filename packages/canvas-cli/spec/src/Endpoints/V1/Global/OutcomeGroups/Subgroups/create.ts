import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

type Parameters = {
  /** The title of the new outcome group. */
  title: string;
  /** The description of the new outcome group. */
  description: string;
  /** A custom GUID for the learning standard */
  vendor_guid: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a subgroup
 *
 * Creates a new empty subgroup under the outcome group with the given title and
 * description.
 *
 * Nickname: create_subgroup_global
 */
export async function create({ parameters }: Options): Promise<OutcomeGroup> {
  return await (
    await fetch(`/v1/global/outcome_groups/{id}/subgroups`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
