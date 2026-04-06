import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  content_migration_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get a migration issue
 *
 * Returns data on an individual migration issue
 *
 * Nickname: get_migration_issue_users
 */
export async function get(options: Options) {
  const response = await client().fetchAs<MigrationIssue>(
    `/api/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
