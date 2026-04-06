import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { PlannerOverride } from '../../../../Resources/Planner.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Determines whether the planner item is marked as completed */
  marked_complete: string;
  /** Determines whether the planner item shows in the opportunities list */
  dismissed: string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a planner override
 *
 * Update a planner override's visibilty for the current user
 *
 * Nickname: update_planner_override
 */
export async function update(options: Options) {
  const response = await client().fetchAs<PlannerOverride>(
    `/api/v1/planner/overrides/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
