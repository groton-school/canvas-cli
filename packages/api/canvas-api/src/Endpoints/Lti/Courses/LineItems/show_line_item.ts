import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

export type show_line_itemPathParameters = {
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
  id: string | number;
};

export type show_line_itemSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include.
     *
     * "launch_url":: includes the launch URL for this line item using the
     * "https://canvas.instructure.com/lti/launch_url" extension
     */
    include: string[];
  }>;

type Options = {
  pathParams: show_line_itemPathParameters;
} & (
  | {
      searchParams?: Partial<show_line_itemSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_line_itemSearchParameters;
      strict: true;
    }
);

/**
 * Show a Line Item
 *
 * Show existing Line Item
 *
 * Nickname: show_line_item
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
