import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_page_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  url_or_id: string | number;
};

export type show_page_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: show_page_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<show_page_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_page_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Show page
 *
 * Retrieve the content of a wiki page
 *
 * Nickname: show_page_courses
 */
export async function show_page_courses(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
