import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Update a content migration
 *
 * Update a content migration. Takes same arguments as
 * {api:ContentMigrationsController#create create} except that you can't change
 * the migration type. However, changing most settings after the migration
 * process has started will not do anything. Generally updating the content
 * migration will be used when there is a file upload problem, or when importing
 * content selectively. If the first upload has a problem you can supply new
 * _pre_attachment_ values to start the process again.
 *
 * Nickname: update_content_migration_accounts
 */
export async function update(options: Options) {
  const response = await client().fetchAs<ContentMigration>(
    `/api/v1/accounts/{account_id}/content_migrations/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
