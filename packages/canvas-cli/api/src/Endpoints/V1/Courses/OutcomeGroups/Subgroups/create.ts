import { client } from '../../../../../Client.js';
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
 * Nickname: create_subgroup_courses
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/v1/courses/{course_id}/outcome_groups/{id}/subgroups`,
    { method: 'POST', params: parameters }
  );
}
