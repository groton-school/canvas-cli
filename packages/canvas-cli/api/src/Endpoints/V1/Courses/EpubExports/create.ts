import { client } from '../../../../Client.js';
import { EpubExport } from '../../../../Resources/EPubExports.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function create(options: Options) {
  return await client().fetchAs<EpubExport>(
    `/api/v1/courses/{course_id}/epub_exports`,
    {
      method: 'POST',
      ...options
    }
  );
}
