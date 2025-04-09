import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get all outcome groups for context
 *
 * Nickname: get_all_outcome_groups_for_context_accounts
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/outcome_groups`,
    {
      method: 'GET',
      pathParams
    }
  );
}
