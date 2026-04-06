import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: delete_planner_overridePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_planner_overridePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_planner_overrideSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_planner_overrideSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_planner_overrideSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_planner_overrideSearchParameters;
          }
      ) & {
        strict: true;
      })
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
