import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<createSearchParameters>;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: createSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: createSearchParameters;
        }
    ) &
      (
        | {
            body: createFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: createFormParameters;
          }
      ) & {
        strict: true;
      });

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
