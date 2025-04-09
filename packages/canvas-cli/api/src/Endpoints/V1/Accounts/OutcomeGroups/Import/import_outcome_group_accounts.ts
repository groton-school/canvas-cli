import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

type import_outcome_group_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type import_outcome_group_accountsFormParameters = {
  /**
   * The ID of the source outcome group.
   *
   * Format: 'int64'
   */
  source_outcome_group_id: number;
  /**
   * If true, perform action asynchronously. In that case, this endpoint will
   * return a Progress object instead of an OutcomeGroup. Use the
   * {api:ProgressController#show progress endpoint} to query the status of
   * the operation. The imported outcome group id and url will be returned in
   * the results of the Progress object as "outcome_group_id" and
   * "outcome_group_url"
   */
  async: boolean;
};

type Options = {
  pathParams: import_outcome_group_accountsPathParameters;
  params?: import_outcome_group_accountsFormParameters;
};

/**
 * Import an outcome group
 *
 * Creates a new subgroup of the outcome group with the same title and
 * description as the source group, then creates links in that new subgroup to
 * the same outcomes that are linked in the source group. Recurses on the
 * subgroups of the source group, importing them each in turn into the new
 * subgroup.
 *
 * Allows you to copy organizational structure, but does not create copies of
 * the outcomes themselves, only new links.
 *
 * The source group must be either global, from the same context as this outcome
 * group, or from an associated account. The source group cannot be the root
 * outcome group of its context.
 *
 * Nickname: import_outcome_group_accounts
 */
export async function import_outcome_group_accounts({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/v1/accounts/{account_id}/outcome_groups/{id}/import`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
