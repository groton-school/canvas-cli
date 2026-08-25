import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type show_planner_overridePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_planner_overrideSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_planner_overrideSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_planner_overrideSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show a planner override
 *
 * Retrieve a planner override for the current user
 *
 * nickname: show_planner_override
 *
 *
 *
 *
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
