import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type show_planner_overridePathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_planner_overridePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show a planner override
 *
 * Retrieve a planner override for the current user
 *
 * Nickname: show_planner_override
 */
export async function show_planner_override({ pathParams }: Options) {
  return await client().fetchAs<PlannerOverride>(`/v1/planner/overrides/{id}`, {
    method: 'GET',
    pathParams
  });
}
