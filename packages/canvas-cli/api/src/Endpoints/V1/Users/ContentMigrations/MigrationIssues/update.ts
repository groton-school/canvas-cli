import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

type updatePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  content_migration_id: string;
  /** ID */
  id: string;
};

type updateFormParameters = {
  /** Set the workflow_state of the issue. */
  workflow_state: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a migration issue
 *
 * Update the workflow_state of a migration issue
 *
 * Nickname: update_migration_issue_users
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<MigrationIssue>(
    `/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
