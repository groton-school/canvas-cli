import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
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
 * Nickname: list_content_migrations_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ContentMigration[]>(
    `/api/v1/courses/{course_id}/content_migrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
