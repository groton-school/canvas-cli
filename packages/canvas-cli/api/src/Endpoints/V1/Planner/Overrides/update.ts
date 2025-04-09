import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

type updatePathParameters = {
  /** ID */
  id: string;
};

type updateFormParameters = {
  /** Determines whether the planner item is marked as completed */
  marked_complete: string;
  /** Determines whether the planner item shows in the opportunities list */
  dismissed: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a planner override
 *
 * Update a planner override's visibilty for the current user
 *
 * Nickname: update_planner_override
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<PlannerOverride>(`/v1/planner/overrides/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
