import { ContentExport } from '../../../../Resources/ContentExports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show content export
 *
 * Get information about a single content export.
 *
 * Nickname: show_content_export_courses
 */
export async function show_content_export_courses({
  parameters
}: Options): Promise<ContentExport> {
  return await (
    await fetch(`/v1/courses/{course_id}/content_exports/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
