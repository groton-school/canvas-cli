import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
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
 * List content migrations
 *
 * Returns paginated content migrations
 *
 * Nickname: list_content_migrations_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<ContentMigration[]>(
    `/v1/groups/{group_id}/content_migrations`,
    {
      method: 'GET',
      pathParams
    }
  );
}
