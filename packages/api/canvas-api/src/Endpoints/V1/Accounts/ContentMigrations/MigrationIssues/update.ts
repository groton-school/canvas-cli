import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { MigrationIssue } from '../../../../../Resources/ContentMigrations.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Set the workflow_state of the issue. */
  workflow_state: string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a migration issue
 *
 * Update the workflow_state of a migration issue
 *
 * Nickname: update_migration_issue_accounts
 */
export async function update(options: Options) {
  const response = await client().fetchAs<MigrationIssue>(
    `/api/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
