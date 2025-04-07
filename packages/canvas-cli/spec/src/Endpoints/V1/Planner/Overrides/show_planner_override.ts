import { PlannerOverride } from '../../../../Resources/Planner.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a planner override
 *
 * Retrieve a planner override for the current user
 *
 * Nickname: show_planner_override
 */
export async function show_planner_override({
  parameters
}: Options): Promise<PlannerOverride> {
  return await (
    await fetch(`/v1/planner/overrides/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
