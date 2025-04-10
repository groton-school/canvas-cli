import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
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
 * Nickname: list_migration_issues_users
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<MigrationIssue[]>(
    `/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues`,
    {
      method: 'GET',
      pathParams
    }
  );
}
