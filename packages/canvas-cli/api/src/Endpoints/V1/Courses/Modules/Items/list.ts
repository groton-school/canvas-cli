import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
};

export type listSearchParameters = Partial<{
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
}> &
  Paginated;

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
  return await client().fetchAs<ModuleItem[]>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items`,
    {
      method: 'GET',
      ...options
    }
  );
}
