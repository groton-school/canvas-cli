import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List pages
 *
 * A paginated list of the wiki pages associated with a course or group
 *
 * Nickname: list_pages_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/pages`, {
    method: 'GET',
    params: parameters
  });
}
