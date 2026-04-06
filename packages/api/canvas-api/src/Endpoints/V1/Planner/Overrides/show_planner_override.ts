import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type show_planner_overridePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_planner_overrideSearchParameters = Masquerade;

type Options = (
  | {
      path: show_planner_overridePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_planner_overridePathParameters;
    }
) &
  (
    | {
        query?: Partial<show_planner_overrideSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_planner_overrideSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_planner_overrideSearchParameters>;
        /** @deprecated Use {Options.query} */
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
