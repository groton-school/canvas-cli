import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Line Item
 *
 * Delete an existing Line Item
 *
 * Nickname: delete_line_item
 */
export async function delete_line_item({ parameters }: Options) {
  return await client().fetchAs<LineItem>(
    `/lti/courses/{course_id}/line_items/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
