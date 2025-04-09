import { client } from '../../../../../Client.js';
import { Migrator } from '../../../../../Resources/ContentMigrations.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List Migration Systems
 *
 * Lists the currently available migration types. These values may change.
 *
 * Nickname: list_migration_systems_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/content_migrations/migrators`,
    {
      method: 'GET',
      pathParams
    }
  );
}
