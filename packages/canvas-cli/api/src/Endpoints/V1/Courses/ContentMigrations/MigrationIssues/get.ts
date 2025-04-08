import { client } from '../../../../../Client.js';
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
 * Nickname: get_migration_issue_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<MigrationIssue>(
    `/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    { method: 'GET', params: parameters }
  );
}
