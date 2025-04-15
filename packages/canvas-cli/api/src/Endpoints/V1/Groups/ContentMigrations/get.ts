import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a content migration
 *
 * Returns data on an individual content migration
 *
 * Nickname: get_content_migration_groups
 */
export async function get(options: Options) {
  return await client().fetchAs<ContentMigration>(
    `/api/v1/groups/{group_id}/content_migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
