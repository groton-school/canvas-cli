import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
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
 * List content migrations
 *
 * Returns paginated content migrations
 *
 * Nickname: list_content_migrations_accounts
 */
export async function list(options: Options) {
  return await client().fetchAs<ContentMigration[]>(
    `/api/v1/accounts/{account_id}/content_migrations`,
    {
      method: 'GET',
      ...options
    }
  );
}
