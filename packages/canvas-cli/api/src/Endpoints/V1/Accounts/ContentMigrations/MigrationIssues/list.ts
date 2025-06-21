import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  content_migration_id: string;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List migration issues
 *
 * Returns paginated migration issues
 *
 * Nickname: list_migration_issues_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<MigrationIssue[]>(
    `/api/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
