import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List content migrations
 *
 * Returns paginated content migrations
 *
 * Nickname: list_content_migrations_groups
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ContentMigration[]>(
    `/api/v1/groups/{group_id}/content_migrations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
