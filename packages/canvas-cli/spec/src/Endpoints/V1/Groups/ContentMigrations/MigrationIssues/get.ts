import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a migration issue
 *
 * Returns data on an individual migration issue
 *
 * Nickname: get_migration_issue_groups
 */
export async function get({ parameters }: Options): Promise<MigrationIssue> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
