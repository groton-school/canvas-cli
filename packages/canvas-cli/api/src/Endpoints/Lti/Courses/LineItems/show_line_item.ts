import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a Line Item
 *
 * Show existing Line Item
 *
 * Nickname: show_line_item
 */
export async function show_line_item({ parameters }: Options) {
  return await client().fetchAs<LineItem>(
    `/lti/courses/{course_id}/line_items/{id}`,
    { method: 'GET', params: parameters }
  );
}
