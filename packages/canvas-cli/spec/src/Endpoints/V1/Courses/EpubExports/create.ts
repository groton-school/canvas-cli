import { EpubExport } from '../../../../Resources/EPubExports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Create ePub Export
 *
 * Begin an ePub export for a course.
 *
 * You can use the {api:ProgressController#show Progress API} to track the
 * progress of the export. The export's progress is linked to with the
 * _progress_url_ value.
 *
 * When the export completes, use the {api:EpubExportsController#show Show
 * content export} endpoint to retrieve a download URL for the exported
 * content.
 *
 * Nickname: create_epub_export
 */
export async function create({ parameters }: Options): Promise<EpubExport> {
  return await (
    await fetch(`/v1/courses/{course_id}/epub_exports`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
