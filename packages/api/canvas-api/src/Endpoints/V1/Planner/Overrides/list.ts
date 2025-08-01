import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type listSearchParameters = Masquerade & Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
