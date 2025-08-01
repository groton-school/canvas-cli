import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** Type of the item that you are overriding in the planner */
  plannable_type: string;
  /**
   * ID of the item that you are overriding in the planner
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  plannable_id: number | string;
  /**
   * If this is true, the item will show in the planner as completed
   *
   * Type: boolean
   */
  marked_complete: boolean | string;
  /**
   * If this is true, the item will not show in the opportunities list
   *
   * Type: boolean
   */
  dismissed: boolean | string;
};

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
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
  const response = await client().fetchAs<PlannerOverride>(
    `/api/v1/planner/overrides`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
