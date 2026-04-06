import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
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
 * Nickname: list_subgroups_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
