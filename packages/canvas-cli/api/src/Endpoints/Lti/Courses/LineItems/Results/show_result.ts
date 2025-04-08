import { client } from '../../../../../Client.js';
import { Result } from '../../../../../Resources/Results.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a Result
 *
 * Show existing Result of a line item.
 *
 * Nickname: show_result
 */
export async function show_result({ parameters }: Options) {
  return await client().fetchAs<Result>(
    `/lti/courses/{course_id}/line_items/{line_item_id}/results/{id}`,
    { method: 'GET', params: parameters }
  );
}
