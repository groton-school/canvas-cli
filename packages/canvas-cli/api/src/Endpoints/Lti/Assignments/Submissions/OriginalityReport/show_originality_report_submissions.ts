import { client } from '../../../../../Client.js';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an Originality Report
 *
 * Get a single originality report
 *
 * Nickname: show_originality_report_submissions
 */
export async function show_originality_report_submissions({
  parameters
}: Options) {
  return await client().fetchAs<OriginalityReport>(
    `/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}`,
    { method: 'GET', params: parameters }
  );
}
