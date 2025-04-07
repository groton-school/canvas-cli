import { LineItem } from '../../../../Resources/LineItems.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List line Items
 *
 * List all Line Items for a course
 *
 * Nickname: list_line_items
 */
export async function list({ parameters }: Options): Promise<LineItem> {
  return await (
    await fetch(`/lti/courses/{course_id}/line_items`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
