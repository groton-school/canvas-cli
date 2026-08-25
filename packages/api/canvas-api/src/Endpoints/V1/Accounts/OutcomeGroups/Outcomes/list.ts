import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The detail level of the outcomes. Defaults to &quot;abbrev&quot;.
Specify &quot;full&quot; for more information.
     *
     * 
     *
     * 
     */
    outcome_style: string;
  }>;

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
 * List linked outcomes
 *
 * A paginated list of the immediate OutcomeLink children of the outcome group.
 *
 * nickname: list_linked_outcomes_accounts
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<OutcomeLink[]>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}/outcomes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
