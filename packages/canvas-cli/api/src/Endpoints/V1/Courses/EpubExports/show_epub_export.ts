import { client } from '../../../../Client.js';
import { EpubExport } from '../../../../Resources/EPubExports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show ePub export
 *
 * Get information about a single ePub export.
 *
 * Nickname: show_epub_export
 */
export async function show_epub_export({ parameters }: Options) {
  return await client().fetchAs<EpubExport>(
    `/v1/courses/{course_id}/epub_exports/{id}`,
    { method: 'GET', params: parameters }
  );
}
