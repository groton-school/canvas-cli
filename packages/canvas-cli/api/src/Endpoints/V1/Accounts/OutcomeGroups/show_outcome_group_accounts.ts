import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type show_outcome_group_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_outcome_group_accountsPathParameters;
};

/**
 * Show an outcome group
 *
 * Nickname: show_outcome_group_accounts
 */
export async function show_outcome_group_accounts({ pathParams }: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/v1/accounts/{account_id}/outcome_groups/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
