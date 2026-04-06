import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: show_page_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_page_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_page_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_page_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_page_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_page_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
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
