import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeLink } from '../../../../Resources/OutcomeGroups.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The detail level of the outcomes. Defaults to "abbrev". Specify "full"
     * for more information.
     */
    outcome_style: string;
    /**
     * The detail level of the outcome groups. Defaults to "abbrev". Specify
     * "full" for more information.
     */
    outcome_group_style: string;
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get all outcome links for context
 *
 * Returns a list of all outcome links in the specified context.
 *
 * Nickname: get_all_outcome_links_for_context_accounts
 */
export async function get(options: Options) {
  const response = await client().fetchAs<OutcomeLink[]>(
    `/api/v1/accounts/{account_id}/outcome_group_links`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
