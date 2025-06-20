import { client } from '../../../../../Client.js';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

export type show_originality_report_submissionsPathParameters = {
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_originality_report_submissionsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
