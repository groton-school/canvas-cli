import { client } from '../../../../../Client.js';
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
 * Nickname: update_migration_issue_accounts
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<MigrationIssue>(
    `/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    { method: 'PUT', params: parameters }
  );
}
