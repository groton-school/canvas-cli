import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { LineItem } from '../../../../Resources/LineItems.js';

export type delete_line_itemPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_line_itemSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_line_itemPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_line_itemPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_line_itemSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_line_itemSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_line_itemSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_line_itemSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a Line Item
 *
 * Delete an existing Line Item
 *
 * Nickname: delete_line_item
 */
export async function delete_line_item(options: Options) {
  const response = await client().fetchAs<LineItem>(
    `/api/lti/courses/{course_id}/line_items/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
