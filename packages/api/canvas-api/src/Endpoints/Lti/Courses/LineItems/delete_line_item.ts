import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

export type delete_line_itemPathParameters = {
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

export type delete_line_itemSearchParameters = Masquerade;

type Options = {
  pathParams: delete_line_itemPathParameters;
} & (
  | {
      searchParams?: Partial<delete_line_itemSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_line_itemSearchParameters;
      strict: true;
    }
);

/**
 * Delete a Line Item
 *
 * Delete an existing Line Item
 *
 * Nickname: delete_line_item
 */
export async function delete_line_item(options: Options) {
  const response = await client().fetchAs<LineItem>(
    `/api/lti/courses/{course_id}/line_items/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
