import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_accountsPathParameters = {
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

export type show_outcome_group_accountsSearchParameters = Masquerade;

type Options = (
  | {
      path: show_outcome_group_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_outcome_group_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_outcome_group_accountsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_outcome_group_accountsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_outcome_group_accountsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_outcome_group_accountsSearchParameters;
        strict: true;
      }
  );

/**
 * Show an outcome group
 *
 * Returns detailed information about a specific outcome group.
 *
 * Nickname: show_outcome_group_accounts
 */
export async function show_outcome_group_accounts(options: Options) {
  const response = await client().fetchAs<OutcomeGroup>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
