import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
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
 * Nickname: get_content_migration_users
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ContentMigration>(
    `/api/v1/users/{user_id}/content_migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
