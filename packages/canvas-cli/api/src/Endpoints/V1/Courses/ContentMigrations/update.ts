import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
 * Nickname: update_content_migration_courses
 */
export async function update(options: Options) {
  return await client().fetchAs<ContentMigration>(
    `/api/v1/courses/{course_id}/content_migrations/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
