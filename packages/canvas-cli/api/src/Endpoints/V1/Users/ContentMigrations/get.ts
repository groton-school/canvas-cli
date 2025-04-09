import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a content migration
 *
 * Returns data on an individual content migration
 *
 * Nickname: get_content_migration_users
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<ContentMigration>(
    `/v1/users/{user_id}/content_migrations/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
