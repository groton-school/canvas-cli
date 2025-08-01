import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type createPathParameters = {
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

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
   * Type: integer
   *
   * Format: 'int64'
   */
  'module_item[position]': number | string;
  /**
   * 0-based indent level; module items may be indented to show a hierarchy
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'module_item[indent]': number | string;
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
   *
   * Type: boolean
   */
  'module_item[new_tab]': boolean | string;
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
   * Type: integer
   *
   * Format: 'int64'
   */
  'module_item[completion_requirement][min_score]': number | string;
  /**
   * Width of the ExternalTool on launch
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'module_item[iframe][width]': number | string;
  /**
   * Height of the ExternalTool on launch
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'module_item[iframe][height]': number | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
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
export async function create(options: Options) {
  const response = await client().fetchAs<ModuleItem>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
