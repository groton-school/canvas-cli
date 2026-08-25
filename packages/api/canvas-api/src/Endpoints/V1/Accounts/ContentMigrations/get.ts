import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
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
 * Get a content migration
 *
 * Returns data on an individual content migration
 *
 * nickname: get_content_migration_accounts
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ContentMigration>(
    `/api/v1/accounts/{account_id}/content_migrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
