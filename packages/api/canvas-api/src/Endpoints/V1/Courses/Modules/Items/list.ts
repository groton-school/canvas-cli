import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type listPathParameters = {
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
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If included, will return additional details specific to the content
     * associated with each item. Refer to the {api:Modules:Module%20Item Module
     * Item specification} for more details. Includes standard lock information
     * for each item.
     */
    include: string[];
    /** The partial title of the items to match and return. */
    search_term: string;
    /** Returns module completion information for the student with this id. */
    student_id: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List module items
 *
 * A paginated list of the items in a module
 *
 * Nickname: list_module_items
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ModuleItem[]>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
