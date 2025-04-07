import { Page } from '../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show front page
 *
 * Retrieve the content of the front page
 *
 * Nickname: show_front_page_courses
 */
export async function show_front_page_courses({
  parameters
}: Options): Promise<Page> {
  return await (
    await fetch(`/v1/courses/{course_id}/front_page`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
