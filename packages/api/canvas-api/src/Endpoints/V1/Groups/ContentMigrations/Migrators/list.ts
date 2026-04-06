import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Migrator } from '../../../../../Resources/ContentMigrations.js';

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
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List Migration Systems
 *
 * Lists the currently available migration types. These values may change.
 *
 * Nickname: list_migration_systems_groups
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Migrator[]>(
    `/api/v1/groups/{group_id}/content_migrations/migrators`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
