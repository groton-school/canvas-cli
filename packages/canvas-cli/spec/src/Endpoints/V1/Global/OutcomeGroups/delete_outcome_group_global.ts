import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an outcome group
 *
 * Deleting an outcome group deletes descendant outcome groups and outcome
 * links. The linked outcomes themselves are only deleted if all links to the
 * outcome were deleted.
 *
 * Aligned outcomes cannot be deleted; as such, if all remaining links to an
 * aligned outcome are included in this group's descendants, the group deletion
 * will fail.
 *
 * Nickname: delete_outcome_group_global
 */
export async function delete_outcome_group_global({
  parameters
}: Options): Promise<OutcomeGroup> {
  return await (
    await fetch(`/v1/global/outcome_groups/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
