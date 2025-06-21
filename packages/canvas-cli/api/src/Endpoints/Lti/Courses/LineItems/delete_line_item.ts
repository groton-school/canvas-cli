import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

export type delete_line_itemPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
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
