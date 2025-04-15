import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Migrator } from '../../../../../Resources/ContentMigrations.js';

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
 * List Migration Systems
 *
 * Lists the currently available migration types. These values may change.
 *
 * Nickname: list_migration_systems_courses
 */
export async function list(options: Options) {
  return await client().fetchAs<Migrator[]>(
    `/api/v1/courses/{course_id}/content_migrations/migrators`,
    {
      method: 'GET',
      ...options
    }
  );
}
