import { PlannerOverride } from '../../../../Resources/Planner.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a planner override
 *
 * Delete a planner override for the current user
 *
 * Nickname: delete_planner_override
 */
export async function delete_planner_override({
  parameters
}: Options): Promise<PlannerOverride> {
  return await (
    await fetch(`/v1/planner/overrides/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
