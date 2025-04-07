import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

type Parameters = {
  /** Set the workflow_state of the issue. */
  workflow_state: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a migration issue
 *
 * Update the workflow_state of a migration issue
 *
 * Nickname: update_migration_issue_groups
 */
export async function update({ parameters }: Options): Promise<MigrationIssue> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
