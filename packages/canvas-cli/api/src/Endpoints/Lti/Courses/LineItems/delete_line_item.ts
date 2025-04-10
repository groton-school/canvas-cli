import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

export type delete_line_itemPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_line_itemPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function delete_line_item({ pathParams }: Options) {
  return await client().fetchAs<LineItem>(
    `/lti/courses/{course_id}/line_items/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
