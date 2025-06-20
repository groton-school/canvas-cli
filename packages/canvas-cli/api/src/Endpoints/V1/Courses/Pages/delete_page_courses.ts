import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type delete_page_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  url_or_id: string;
};

type Options = {
  pathParams: delete_page_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete page
 *
 * Delete a wiki page
 *
 * Nickname: delete_page_courses
 */
export async function delete_page_courses(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
