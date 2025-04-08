import { client } from '../../../../Client.js';
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
export async function show_content_export_courses({ parameters }: Options) {
  return await client().fetchAs<ContentExport>(
    `/v1/courses/{course_id}/content_exports/{id}`,
    { method: 'GET', params: parameters }
  );
}
