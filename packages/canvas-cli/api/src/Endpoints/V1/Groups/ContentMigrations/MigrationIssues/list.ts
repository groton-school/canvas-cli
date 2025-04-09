import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

type listPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  content_migration_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List migration issues
 *
 * Returns paginated migration issues
 *
 * Nickname: list_migration_issues_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues`,
    {
      method: 'GET',
      pathParams
    }
  );
}
