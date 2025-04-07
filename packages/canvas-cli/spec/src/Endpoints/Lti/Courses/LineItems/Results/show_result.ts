import { Result } from '../../../../../Resources/LiveAssessments.js';

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
export async function show_result({ parameters }: Options): Promise<Result> {
  return await (
    await fetch(
      `/lti/courses/{course_id}/line_items/{line_item_id}/results/{id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
