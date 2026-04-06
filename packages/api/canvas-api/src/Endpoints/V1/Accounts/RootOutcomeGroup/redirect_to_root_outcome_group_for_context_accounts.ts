import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type redirect_to_root_outcome_group_for_context_accountsPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    account_id: string | number;
  };

export type redirect_to_root_outcome_group_for_context_accountsSearchParameters =
  Masquerade;

type Options = (
  | {
      path: redirect_to_root_outcome_group_for_context_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: redirect_to_root_outcome_group_for_context_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<redirect_to_root_outcome_group_for_context_accountsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<redirect_to_root_outcome_group_for_context_accountsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: redirect_to_root_outcome_group_for_context_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: redirect_to_root_outcome_group_for_context_accountsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Redirect to root outcome group for context
 *
 * Convenience redirect to find the root outcome group for a particular context.
 * Will redirect to the appropriate outcome group's URL.
 *
 * Nickname: redirect_to_root_outcome_group_for_context_accounts
 */
export async function redirect_to_root_outcome_group_for_context_accounts(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/root_outcome_group`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
