import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_globalPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_outcome_group_globalSearchParameters = Masquerade;

type Options = (
  | {
      path: show_outcome_group_globalPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_outcome_group_globalPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_outcome_group_globalSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_outcome_group_globalSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_outcome_group_globalSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_outcome_group_globalSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show an outcome group
 *
 * Returns detailed information about a specific outcome group.
 *
 * Nickname: show_outcome_group_global
 */
export async function show_outcome_group_global(options: Options) {
  const response = await client().fetchAs<OutcomeGroup>(
    `/api/v1/global/outcome_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
