import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a content migration
 *
 * Returns data on an individual content migration
 *
 * Nickname: get_content_migration_users
 */
export async function get({ parameters }: Options): Promise<ContentMigration> {
  return await (
    await fetch(`/v1/users/{user_id}/content_migrations/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
