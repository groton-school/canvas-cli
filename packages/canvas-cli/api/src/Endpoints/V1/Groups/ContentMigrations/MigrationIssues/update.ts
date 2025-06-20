import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type updatePathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  content_migration_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** Set the workflow_state of the issue. */
  workflow_state: string;
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
 * Update a migration issue
 *
 * Update the workflow_state of a migration issue
 *
 * Nickname: update_migration_issue_groups
 */
export async function update(options: Options) {
  const response = await client().fetchAs<MigrationIssue>(
    `/api/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
