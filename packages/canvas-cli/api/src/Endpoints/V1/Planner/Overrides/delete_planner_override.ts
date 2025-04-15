import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type delete_planner_overridePathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_planner_overridePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<PlannerOverride>(
    `/api/v1/planner/overrides/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
