import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { LineItem } from '../../../../Resources/LineItems.js';

export type show_line_itemPathParameters = {
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
  id: string | number;
};

export type show_line_itemSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include.

&quot;launch_url&quot;:: includes the launch URL for this line item using the &quot;https\://canvas.instructure.com/lti/launch_url&quot; extension
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options = (
  | {
      path: show_line_itemPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_line_itemPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_line_itemSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_line_itemSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_line_itemSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_line_itemSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show a Line Item
 *
 * Show existing Line Item
 *
 * nickname: show_line_item
 *
 *
 *
 *
 */
export async function show_line_item(options: Options) {
  const response = await client().fetchAs<LineItem>(
    `/api/lti/courses/{course_id}/line_items/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
