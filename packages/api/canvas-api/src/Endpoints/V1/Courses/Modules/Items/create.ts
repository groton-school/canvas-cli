import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ModuleItem } from '../../../../../Resources/CoursePace.js';

export type createPathParameters = {
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
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The name of the module item and associated content
   *
   *
   *
   *
   */
  'module_item[title]': string;
  /**
   * The type of content linked to the item
   *
   *
   *
   *
   */
  'module_item[type]': string;
  /**
     * The id of the content to link to the module item. Required, except for
&#x27;ExternalUrl&#x27;, &#x27;Page&#x27;, and &#x27;SubHeader&#x27; types.
     *
     * 
     *
     * 
     */
  'module_item[content_id]': string;
  /**
     * The position of this item in the module (1-based).
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
     * Suffix for the linked wiki page (e.g. &#x27;front-page&#x27;). Required for &#x27;Page&#x27;
type.
     *
     * 
     *
     * 
     */
  'module_item[page_url]': string;
  /**
     * External url that the item points to. [Required for &#x27;ExternalUrl&#x27; and
&#x27;ExternalTool&#x27; types.
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
     * Minimum score required to complete. Required for completion_requirement
type &#x27;min_score&#x27;.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module_item[completion_requirement][min_score]': number | string;
  /**
     * Width of the ExternalTool on launch
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module_item[iframe][width]': number | string;
  /**
     * Height of the ExternalTool on launch
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'module_item[iframe][height]': number | string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a module item
 *
 * Create and return a new module item
 *
 * nickname: create_module_item
 *
 *
 *
 *
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
