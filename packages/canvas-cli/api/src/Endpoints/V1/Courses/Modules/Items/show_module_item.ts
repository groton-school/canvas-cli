import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type show_module_itemPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
  /** ID */
  id: string;
};

export type show_module_itemSearchParameters = {
  /**
   * If included, will return additional details specific to the content
   * associated with this item. Refer to the {api:Modules:Module%20Item Module
   * Item specification} for more details. Includes standard lock information
   * for each item.
   */
  include: string[];
  /** Returns module completion information for the student with this id. */
  student_id: string;
};

type Options = {
  pathParams: show_module_itemPathParameters;
} & (
  | {
      searchParams?: Partial<show_module_itemSearchParameters>;
      strict?: false;
    }
  | {
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
export async function show_module_item({ pathParams, searchParams }: Options) {
  return await client().fetchAs<ModuleItem>(
    `/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
