import { client } from '../../../../Client.js';

export type redirect_to_root_outcome_group_for_context_accountsPathParameters =
  {
    /** ID */
    account_id: string;
  };

type Options = {
  pathParams: redirect_to_root_outcome_group_for_context_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
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
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/root_outcome_group`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
