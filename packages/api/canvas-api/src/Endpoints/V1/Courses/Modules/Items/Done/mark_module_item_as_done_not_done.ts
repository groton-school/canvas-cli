import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_module_item_as_done_not_donePathParameters = {
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
  module_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type mark_module_item_as_done_not_doneSearchParameters = Masquerade;

type Options = (
  | {
      path: mark_module_item_as_done_not_donePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_module_item_as_done_not_donePathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_module_item_as_done_not_doneSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_module_item_as_done_not_doneSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_module_item_as_done_not_doneSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_module_item_as_done_not_doneSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Mark module item as done/not done
 *
 * Mark a module item as done/not done. Use HTTP method PUT to mark as done, and
 * DELETE to mark as not done.
 *
 * Nickname: mark_module_item_as_done_not_done
 */
export async function mark_module_item_as_done_not_done(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}/done`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
