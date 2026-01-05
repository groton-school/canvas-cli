import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
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

type Options = {
  pathParams: show_originality_report_submissionsPathParameters;
} & (
  | {
      searchParams?: Partial<show_originality_report_submissionsSearchParameters>;
      strict?: false;
    }
  | {
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
