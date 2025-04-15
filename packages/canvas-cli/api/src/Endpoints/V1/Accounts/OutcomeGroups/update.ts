import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The new outcome group title. */
  title: string;
  /** The new outcome group description. */
  description: string;
  /** A custom GUID for the learning standard. */
  vendor_guid: string;
  /**
   * The id of the new parent outcome group.
   *
   * Format: 'int64'
   */
  parent_outcome_group_id: number;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an outcome group
 *
 * Modify an existing outcome group. Fields not provided are left as is;
 * unrecognized fields are ignored.
 *
 * When changing the parent outcome group, the new parent group must belong to
 * the same context as this outcome group, and must not be a descendant of this
 * outcome group (i.e. no cycles allowed).
 *
 * Nickname: update_outcome_group_accounts
 */
export async function update(options: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
