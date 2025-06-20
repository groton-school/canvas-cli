import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_content_export_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
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
