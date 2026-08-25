import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * nickname: list_subgroups_global
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/global/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
