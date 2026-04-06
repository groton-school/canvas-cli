import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type delete_module_itemPathParameters = {
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

export type delete_module_itemSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_module_itemPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_module_itemPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_module_itemSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_module_itemSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_module_itemSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_module_itemSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete module item
 *
 * Delete a module item
 *
 * Nickname: delete_module_item
 */
export async function delete_module_item(options: Options) {
  const response = await client().fetchAs<ModuleItem>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
