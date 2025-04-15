import { client } from '../../../../Client.js';
import { EpubExport } from '../../../../Resources/EPubExports.js';

export type show_epub_exportPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_epub_exportPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show ePub export
 *
 * Get information about a single ePub export.
 *
 * Nickname: show_epub_export
 */
export async function show_epub_export(options: Options) {
  return await client().fetchAs<EpubExport>(
    `/api/v1/courses/{course_id}/epub_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
