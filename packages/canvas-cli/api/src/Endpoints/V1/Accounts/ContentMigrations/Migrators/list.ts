import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Migrator } from '../../../../../Resources/ContentMigrations.js';

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
 * List Migration Systems
 *
 * Lists the currently available migration types. These values may change.
 *
 * Nickname: list_migration_systems_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<Migrator[]>(
    `/v1/accounts/{account_id}/content_migrations/migrators`,
    {
      method: 'GET',
      pathParams
    }
  );
}
