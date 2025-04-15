import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_outcome_group_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show an outcome group
 *
 * Nickname: show_outcome_group_accounts
 */
export async function show_outcome_group_accounts(options: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
