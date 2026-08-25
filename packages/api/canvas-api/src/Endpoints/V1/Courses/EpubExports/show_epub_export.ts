import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { EpubExport } from '../../../../Resources/EPubExports.js';

export type show_epub_exportPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type show_epub_exportSearchParameters = Masquerade;

type Options = (
  | {
      path: show_epub_exportPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_epub_exportPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_epub_exportSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_epub_exportSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_epub_exportSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_epub_exportSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show ePub export
 *
 * Get information about a single ePub export.
 *
 * nickname: show_epub_export
 *
 *
 *
 *
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
