import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  module_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The name of the module item
   *
   *
   *
   *
   */
  'module_item[title]': string;
  /**
     * The position of this item in the module (1-based)
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module_item[position]': number | string;
  /**
     * 0-based indent level; module items may be indented to show a hierarchy
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module_item[indent]': number | string;
  /**
   * External url that the item points to. Only applies to &#x27;ExternalUrl&#x27; type.
   *
   *
   *
   *
   */
  'module_item[external_url]': string;
  /**
     * Whether the external tool opens in a new tab. Only applies to
&#x27;ExternalTool&#x27; type.
     *
     * type: boolean
     *
     * 
     */
  'module_item[new_tab]': boolean | string;
  /**
     * Completion requirement for this module item.
&quot;must_view&quot;: Applies to all item types
&quot;must_contribute&quot;: Only applies to &quot;Assignment&quot;, &quot;Discussion&quot;, and &quot;Page&quot; types
&quot;must_submit&quot;, &quot;min_score&quot;: Only apply to &quot;Assignment&quot; and &quot;Quiz&quot; types
&quot;must_mark_done&quot;: Only applies to &quot;Assignment&quot; and &quot;Page&quot; types
Inapplicable types will be ignored
     *
     * 
     *
     * 
     */
  'module_item[completion_requirement][type]': string;
  /**
     * Minimum score required to complete, Required for completion_requirement
type &#x27;min_score&#x27;.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module_item[completion_requirement][min_score]': number | string;
  /**
   * Whether the module item is published and visible to students.
   *
   * type: boolean
   *
   *
   */
  'module_item[published]': boolean | string;
  /**
     * Move this item to another module by specifying the target module id here.
The target module must be in the same course.
     *
     * 
     *
     * 
     */
  'module_item[module_id]': string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a module item
 *
 * Update and return an existing module item
 *
 * nickname: update_module_item
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<ModuleItem>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
