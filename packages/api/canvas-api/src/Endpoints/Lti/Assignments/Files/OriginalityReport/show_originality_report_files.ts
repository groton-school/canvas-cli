import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

export type show_originality_report_filesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  file_id: string | number;
};

export type show_originality_report_filesSearchParameters = Masquerade;

type Options = (
  | {
      path: show_originality_report_filesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_originality_report_filesPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_originality_report_filesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_originality_report_filesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_originality_report_filesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_originality_report_filesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show an Originality Report
 *
 * Get a single originality report
 *
 * Nickname: show_originality_report_files
 */
export async function show_originality_report_files(options: Options) {
  const response = await client().fetchAs<OriginalityReport>(
    `/api/lti/assignments/{assignment_id}/files/{file_id}/originality_report`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
