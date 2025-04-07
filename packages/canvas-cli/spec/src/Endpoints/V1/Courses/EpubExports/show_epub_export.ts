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
export async function show_epub_export({
  parameters
}: Options): Promise<EpubExport> {
  return await (
    await fetch(`/v1/courses/{course_id}/epub_exports/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
