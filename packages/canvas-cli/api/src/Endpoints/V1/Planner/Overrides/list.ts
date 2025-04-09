import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

type Options = {};

/**
 * List planner overrides
 *
 * Retrieve a planner override for the current user
 *
 * Nickname: list_planner_overrides
 */
export async function list({}: Options) {
  return await client().fetchAs<string[]>(`/v1/planner/overrides`, {
    method: 'GET'
  });
}
