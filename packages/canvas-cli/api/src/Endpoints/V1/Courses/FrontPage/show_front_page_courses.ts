import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type show_front_page_coursesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: show_front_page_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show front page
 *
 * Retrieve the content of the front page
 *
 * Nickname: show_front_page_courses
 */
export async function show_front_page_courses({ pathParams }: Options) {
  return await client().fetchAs<Page>(`/v1/courses/{course_id}/front_page`, {
    method: 'GET',
    pathParams
  });
}
