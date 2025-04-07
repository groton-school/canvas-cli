import { PlannerOverride } from '../../../../Resources/Planner.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List planner overrides
 *
 * Retrieve a planner override for the current user
 *
 * Nickname: list_planner_overrides
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/planner/overrides`, { method: 'GET', body: parameters })
  ).json();
}
