import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

export type show_originality_report_submissionsPathParameters = {
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
  submission_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_originality_report_submissionsSearchParameters = Masquerade;

type Options = (
  | {
      path: show_originality_report_submissionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_originality_report_submissionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_originality_report_submissionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_originality_report_submissionsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_originality_report_submissionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_originality_report_submissionsSearchParameters;
        strict: true;
      }
  );

/**
 * Show an Originality Report
 *
 * Get a single originality report
 *
 * Nickname: show_originality_report_submissions
 */
export async function show_originality_report_submissions(options: Options) {
  const response = await client().fetchAs<OriginalityReport>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
