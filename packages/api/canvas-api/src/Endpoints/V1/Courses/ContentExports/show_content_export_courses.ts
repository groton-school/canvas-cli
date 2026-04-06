import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_coursesPathParameters = {
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
  id: string | number;
};

export type show_content_export_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: show_content_export_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_content_export_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_content_export_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_content_export_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_content_export_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_content_export_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show content export
 *
 * Get information about a single content export.
 *
 * Nickname: show_content_export_courses
 */
export async function show_content_export_courses(options: Options) {
  const response = await client().fetchAs<ContentExport>(
    `/api/v1/courses/{course_id}/content_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
