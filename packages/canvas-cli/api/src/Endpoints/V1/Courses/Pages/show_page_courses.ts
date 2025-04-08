import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show page
 *
 * Retrieve the content of a wiki page
 *
 * Nickname: show_page_courses
 */
export async function show_page_courses({ parameters }: Options) {
  return await client().fetchAs<Page>(
    `/v1/courses/{course_id}/pages/{url_or_id}`,
    { method: 'GET', params: parameters }
  );
}
