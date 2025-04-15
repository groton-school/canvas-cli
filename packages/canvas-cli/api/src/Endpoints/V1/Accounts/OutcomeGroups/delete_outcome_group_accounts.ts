import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type delete_outcome_group_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_outcome_group_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete an outcome group
 *
 * Deleting an outcome group deletes descendant outcome groups and outcome
 * links. The linked outcomes themselves are only deleted if all links to the
 * outcome were deleted.
 *
 * Aligned outcomes cannot be deleted; as such, if all remaining links to an
 * aligned outcome are included in this group's descendants, the group deletion
 * will fail.
 *
 * Nickname: delete_outcome_group_accounts
 */
export async function delete_outcome_group_accounts(options: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
