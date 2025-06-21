import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type show_outcome_group_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: show_outcome_group_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<show_outcome_group_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_outcome_group_accountsSearchParameters;
      strict: true;
    }
);

/**
 * Show an outcome group
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
