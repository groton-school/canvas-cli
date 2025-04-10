import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  content_migration_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a migration issue
 *
 * Returns data on an individual migration issue
 *
 * Nickname: get_migration_issue_groups
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<MigrationIssue>(
    `/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
