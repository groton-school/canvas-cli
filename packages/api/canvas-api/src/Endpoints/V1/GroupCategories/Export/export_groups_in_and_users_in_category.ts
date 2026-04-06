import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type export_groups_in_and_users_in_categoryPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
};

export type export_groups_in_and_users_in_categorySearchParameters = Masquerade;

type Options = (
  | {
      path: export_groups_in_and_users_in_categoryPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: export_groups_in_and_users_in_categoryPathParameters;
    }
) &
  (
    | {
        query?: Partial<export_groups_in_and_users_in_categorySearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<export_groups_in_and_users_in_categorySearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<export_groups_in_and_users_in_categorySearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: export_groups_in_and_users_in_categorySearchParameters;
        strict: true;
      }
  );

/**
 * Export groups in and users in category
 *
 * Returns a csv file of users in format ready to import.
 *
 * Nickname: export_groups_in_and_users_in_category
 */
export async function export_groups_in_and_users_in_category(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/group_categories/{group_category_id}/export`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
