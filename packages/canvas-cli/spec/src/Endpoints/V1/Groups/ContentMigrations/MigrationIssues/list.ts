import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List migration issues
 *
 * Returns paginated migration issues
 *
 * Nickname: list_migration_issues_groups
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
