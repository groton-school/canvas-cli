import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  content_migration_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a migration issue
 *
 * Returns data on an individual migration issue
 *
 * nickname: get_migration_issue_groups
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<MigrationIssue>(
    `/api/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
