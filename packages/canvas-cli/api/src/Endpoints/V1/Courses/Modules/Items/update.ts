import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The name of the module item */
  'module_item[title]': string;
  /**
   * The position of this item in the module (1-based)
   *
   * Format: 'int64'
   */
  'module_item[position]': number;
  /**
   * 0-based indent level; module items may be indented to show a hierarchy
   *
   * Format: 'int64'
   */
  'module_item[indent]': number;
  /** External url that the item points to. Only applies to 'ExternalUrl' type. */
  'module_item[external_url]': string;
  /**
   * Whether the external tool opens in a new tab. Only applies to
   * 'ExternalTool' type.
   */
  'module_item[new_tab]': boolean;
  /**
   * Completion requirement for this module item. "must_view": Applies to all
   * item types "must_contribute": Only applies to "Assignment", "Discussion",
   * and "Page" types "must_submit", "min_score": Only apply to "Assignment"
   * and "Quiz" types "must_mark_done": Only applies to "Assignment" and
   * "Page" types Inapplicable types will be ignored
   */
  'module_item[completion_requirement][type]': string;
  /**
   * Minimum score required to complete, Required for completion_requirement
   * type 'min_score'.
   *
   * Format: 'int64'
   */
  'module_item[completion_requirement][min_score]': number;
  /** Whether the module item is published and visible to students. */
  'module_item[published]': boolean;
  /**
   * Move this item to another module by specifying the target module id here.
   * The target module must be in the same course.
   */
  'module_item[module_id]': string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a module item
 *
 * Update and return an existing module item
 *
 * Nickname: update_module_item
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<ModuleItem>(
    `/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
