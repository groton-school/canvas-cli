import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type show_planner_overridePathParameters = {
  /** ID */
  id: string;
};

export type show_planner_overrideSearchParameters = Masquerade;

type Options = {
  pathParams: show_planner_overridePathParameters;
} & (
  | {
      searchParams?: Partial<show_planner_overrideSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_planner_overrideSearchParameters;
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
export async function show_planner_override(options: Options) {
  const response = await client().fetchAs<PlannerOverride>(
    `/api/v1/planner/overrides/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
