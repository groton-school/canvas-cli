import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List content migrations
 *
 * Returns paginated content migrations
 *
 * Nickname: list_content_migrations_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/content_migrations`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
