import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Page } from '../../../../Resources/Pages.js';

export type show_front_page_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type show_front_page_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: show_front_page_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_front_page_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_front_page_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_front_page_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_front_page_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_front_page_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show front page
 *
 * Retrieve the content of the front page
 *
 * Nickname: show_front_page_courses
 */
export async function show_front_page_courses(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/courses/{course_id}/front_page`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
