import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  module_id: string;
};

export type createFormParameters = {
  /** The name of the module item and associated content */
  'module_item[title]': string;
  /** The type of content linked to the item */
  'module_item[type]': string;
  /**
   * The id of the content to link to the module item. Required, except for
   * 'ExternalUrl', 'Page', and 'SubHeader' types.
   */
  'module_item[content_id]': string;
  /**
   * The position of this item in the module (1-based).
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
  /**
   * Suffix for the linked wiki page (e.g. 'front-page'). Required for 'Page'
   * type.
   */
  'module_item[page_url]': string;
  /**
   * External url that the item points to. [Required for 'ExternalUrl' and
   * 'ExternalTool' types.
   */
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
   * Minimum score required to complete. Required for completion_requirement
   * type 'min_score'.
   *
   * Format: 'int64'
   */
  'module_item[completion_requirement][min_score]': number;
  /**
   * Width of the ExternalTool on launch
   *
   * Format: 'int64'
   */
  'module_item[iframe][width]': number;
  /**
   * Height of the ExternalTool on launch
   *
   * Format: 'int64'
   */
  'module_item[iframe][height]': number;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a module item
 *
 * Create and return a new module item
 *
 * Nickname: create_module_item
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<ModuleItem>(
    `/v1/courses/{course_id}/modules/{module_id}/items`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
