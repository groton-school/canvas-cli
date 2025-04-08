import { client } from '../../../../Client.js';
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
export async function delete_planner_override({ parameters }: Options) {
  return await client().fetchAs<PlannerOverride>(`/v1/planner/overrides/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
