import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_page_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  url_or_id: string;
};

type Options = {
  pathParams: show_page_coursesPathParameters;
};

/**
 * Show page
 *
 * Retrieve the content of a wiki page
 *
 * Nickname: show_page_courses
 */
export async function show_page_courses({ pathParams }: Options) {
  return await client().fetchAs<Page>(
    `/v1/courses/{course_id}/pages/{url_or_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
