import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

type createFormParameters = {
  /** Type of the item that you are overriding in the planner */
  plannable_type: string;
  /**
   * ID of the item that you are overriding in the planner
   *
   * Format: 'int64'
   */
  plannable_id: number;
  /** If this is true, the item will show in the planner as completed */
  marked_complete: boolean;
  /** If this is true, the item will not show in the opportunities list */
  dismissed: boolean;
};

type Options = {
  params?: createFormParameters;
};

/**
 * Create a planner override
 *
 * Create a planner override for the current user
 *
 * Nickname: create_planner_override
 */
export async function create({ params }: Options) {
  return await client().fetchAs<PlannerOverride>(`/v1/planner/overrides`, {
    method: 'POST',
    params
  });
}
