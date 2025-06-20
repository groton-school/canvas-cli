import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type listSearchParameters = Paginated;

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List planner overrides
 *
 * Retrieve a planner override for the current user
 *
 * Nickname: list_planner_overrides
 */
export async function list(options: Options) {
  const response = await client().fetchAs<PlannerOverride[]>(
    `/api/v1/planner/overrides`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
