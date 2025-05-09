import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type createFormParameters = {
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

type Options =
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    };

/**
 * Create a planner override
 *
 * Create a planner override for the current user
 *
 * Nickname: create_planner_override
 */
export async function create(options: Options) {
  return await client().fetchAs<PlannerOverride>(`/api/v1/planner/overrides`, {
    method: 'POST',
    ...options
  });
}
