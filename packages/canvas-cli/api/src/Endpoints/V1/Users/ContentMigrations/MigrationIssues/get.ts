import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  content_migration_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a migration issue
 *
 * Returns data on an individual migration issue
 *
 * Nickname: get_migration_issue_users
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<MigrationIssue>(
    `/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
