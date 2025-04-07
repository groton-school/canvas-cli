import { Migrator } from '../../../../../Resources/ContentMigrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Migration Systems
 *
 * Lists the currently available migration types. These values may change.
 *
 * Nickname: list_migration_systems_accounts
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/content_migrations/migrators`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
