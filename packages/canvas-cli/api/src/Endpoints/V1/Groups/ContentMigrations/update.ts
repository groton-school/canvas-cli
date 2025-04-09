import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type updatePathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: updatePathParameters;
};

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
 * Nickname: update_content_migration_groups
 */
export async function update({ pathParams }: Options) {
  return await client().fetchAs<ContentMigration>(
    `/v1/groups/{group_id}/content_migrations/{id}`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
