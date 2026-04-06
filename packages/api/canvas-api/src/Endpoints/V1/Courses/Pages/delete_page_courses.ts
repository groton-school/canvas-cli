import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Page } from '../../../../Resources/Pages.js';

export type delete_page_coursesPathParameters = {
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

export type delete_page_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_page_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_page_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_page_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_page_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_page_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_page_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
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
