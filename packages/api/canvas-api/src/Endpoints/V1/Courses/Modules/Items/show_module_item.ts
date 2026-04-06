import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type show_module_itemPathParameters = {
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

export type show_module_itemSearchParameters = Masquerade &
  Partial<{
    /**
     * If included, will return additional details specific to the content
     * associated with this item. Refer to the {api:Modules:Module%20Item Module
     * Item specification} for more details. Includes standard lock information
     * for each item.
     */
    include: string[];
    /** Returns module completion information for the student with this id. */
    student_id: string;
  }>;

type Options = (
  | {
      path: show_module_itemPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_module_itemPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_module_itemSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_module_itemSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_module_itemSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_module_itemSearchParameters;
        strict: true;
      }
  );

/**
 * Show module item
 *
 * Get information about a single module item
 *
 * Nickname: show_module_item
 */
export async function show_module_item(options: Options) {
  const response = await client().fetchAs<ModuleItem>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
