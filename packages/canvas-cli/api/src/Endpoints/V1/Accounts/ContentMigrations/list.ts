import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List content migrations
 *
 * Returns paginated content migrations
 *
 * Nickname: list_content_migrations_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/content_migrations`,
    {
      method: 'GET',
      pathParams
    }
  );
}
