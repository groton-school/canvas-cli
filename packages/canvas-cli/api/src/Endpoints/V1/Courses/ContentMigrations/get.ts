import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
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
 * Nickname: get_content_migration_courses
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<ContentMigration>(
    `/v1/courses/{course_id}/content_migrations/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
