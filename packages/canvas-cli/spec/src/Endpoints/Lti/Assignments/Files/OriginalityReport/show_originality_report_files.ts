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
 * Nickname: show_originality_report_files
 */
export async function show_originality_report_files({
  parameters
}: Options): Promise<OriginalityReport> {
  return await (
    await fetch(
      `/lti/assignments/{assignment_id}/files/{file_id}/originality_report`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
