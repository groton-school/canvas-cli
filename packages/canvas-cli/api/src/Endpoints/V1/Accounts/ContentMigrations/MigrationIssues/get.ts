import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  content_migration_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a migration issue
 *
 * Returns data on an individual migration issue
 *
 * Nickname: get_migration_issue_accounts
 */
export async function get(options: Options) {
  const response = await client().fetchAs<MigrationIssue>(
    `/api/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
