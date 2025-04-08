import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List content migrations
 *
 * Returns paginated content migrations
 *
 * Nickname: list_content_migrations_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/content_migrations`,
    { method: 'GET', params: parameters }
  );
}
