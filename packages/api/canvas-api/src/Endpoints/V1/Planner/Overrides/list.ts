import { client, Masquerade, Paginated } from '#client';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type listSearchParameters = Masquerade & Paginated;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {Options.query} */
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
