import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type delete_planner_overridePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_planner_overrideSearchParameters = Masquerade;

type Options = {
  pathParams: delete_planner_overridePathParameters;
} & (
  | {
      searchParams?: Partial<delete_planner_overrideSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_planner_overrideSearchParameters;
      strict: true;
    }
);

/**
 * Delete a planner override
 *
 * Delete a planner override for the current user
 *
 * Nickname: delete_planner_override
 */
export async function delete_planner_override(options: Options) {
  const response = await client().fetchAs<PlannerOverride>(
    `/api/v1/planner/overrides/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
