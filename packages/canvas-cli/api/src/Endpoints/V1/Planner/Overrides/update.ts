import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

type Parameters = {
  /** Determines whether the planner item is marked as completed */
  marked_complete: string;
  /** Determines whether the planner item shows in the opportunities list */
  dismissed: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a planner override
 *
 * Update a planner override's visibilty for the current user
 *
 * Nickname: update_planner_override
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<PlannerOverride>(`/v1/planner/overrides/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
