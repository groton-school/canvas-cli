import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Group } from '../../../../Resources/Groups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
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
 * List groups in group category
 *
 * Returns a paginated list of groups in a group category
 *
 * Nickname: list_groups_in_group_category
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Group[]>(
    `/api/v1/group_categories/{group_category_id}/groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
