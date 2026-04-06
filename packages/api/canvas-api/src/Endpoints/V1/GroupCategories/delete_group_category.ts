import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_group_categoryPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
};

export type delete_group_categorySearchParameters = Masquerade;

type Options = (
  | {
      path: delete_group_categoryPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_group_categoryPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_group_categorySearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_group_categorySearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_group_categorySearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_group_categorySearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a Group Category
 *
 * Deletes a group category and all groups under it. Protected group categories
 * can not be deleted, i.e. "communities" and "student_organized".
 *
 * Nickname: delete_group_category
 */
export async function delete_group_category(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/group_categories/{group_category_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
