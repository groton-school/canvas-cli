import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { EpubExport } from '../../../../Resources/EPubExports.js';

export type show_epub_exportPathParameters = {
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

export type show_epub_exportSearchParameters = Masquerade;

type Options = {
  pathParams: show_epub_exportPathParameters;
} & (
  | {
      searchParams?: Partial<show_epub_exportSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_epub_exportSearchParameters;
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
  const response = await client().fetchAs<EpubExport>(
    `/api/v1/courses/{course_id}/epub_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
