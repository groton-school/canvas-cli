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
 * Nickname: list_migration_issues_courses
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
