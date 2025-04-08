import { client } from '../../../../../Client.js';
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
 * Nickname: list_migration_systems_users
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/content_migrations/migrators`,
    { method: 'GET', params: parameters }
  );
}
