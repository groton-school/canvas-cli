import { client } from '../../../../../Client.js';
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
 * Nickname: list_migration_issues_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues`,
    { method: 'GET', params: parameters }
  );
}
