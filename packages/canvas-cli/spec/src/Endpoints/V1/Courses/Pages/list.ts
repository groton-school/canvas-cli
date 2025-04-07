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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/pages`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
