import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  content_migration_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List migration issues
 *
 * Returns paginated migration issues
 *
 * Nickname: list_migration_issues_courses
 */
export async function list(options: Options) {
  return await client().fetchAs<MigrationIssue[]>(
    `/api/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues`,
    {
      method: 'GET',
      ...options
    }
  );
}
