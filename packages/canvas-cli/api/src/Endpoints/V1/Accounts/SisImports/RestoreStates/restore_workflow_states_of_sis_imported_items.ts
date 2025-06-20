import { client } from '../../../../../Client.js';
import { Progress } from '../../../../../Resources/CoursePace.js';

export type restore_workflow_states_of_sis_imported_itemsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type restore_workflow_states_of_sis_imported_itemsFormParameters = {
  /** If set, will only restore items that were deleted from batch_mode. */
  batch_mode: boolean;
  /**
   * If set, will only restore items that were deleted. This will ignore any
   * items that were created or modified.
   */
  undelete_only: boolean;
  /**
   * If set, will only restore enrollments that were concluded. This will
   * ignore any items that were created or deleted.
   */
  unconclude_only: boolean;
};

type Options = {
  pathParams: restore_workflow_states_of_sis_imported_itemsPathParameters;
} & (
  | {
      params?: Partial<restore_workflow_states_of_sis_imported_itemsFormParameters>;
      strict?: false;
    }
  | {
      params: restore_workflow_states_of_sis_imported_itemsFormParameters;
      strict: true;
    }
);

/**
 * Restore workflow_states of SIS imported items
 *
 * This will restore the the workflow_state for all the items that changed their
 * workflow_state during the import being restored. This will restore states for
 * items imported with the following importers: accounts.csv terms.csv
 * courses.csv sections.csv group_categories.csv groups.csv users.csv admins.csv
 * This also restores states for other items that changed during the import. An
 * example would be if an enrollment was deleted from a sis import and the
 * group_membership was also deleted as a result of the enrollment deletion,
 * both items would be restored when the sis batch is restored.
 *
 * Restore data is retained for 30 days post-import. This endpoint is
 * unavailable after that time.
 *
 * Nickname: restore_workflow_states_of_sis_imported_items
 */
export async function restore_workflow_states_of_sis_imported_items(
  options: Options
) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/accounts/{account_id}/sis_imports/{id}/restore_states`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
