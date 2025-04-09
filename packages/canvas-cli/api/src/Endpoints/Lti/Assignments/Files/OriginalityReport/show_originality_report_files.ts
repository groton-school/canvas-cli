import { client } from '../../../../../Client.js';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

type show_originality_report_filesPathParameters = {
  /** ID */
  assignment_id: string;
  /** ID */
  file_id: string;
};

type Options = {
  pathParams: show_originality_report_filesPathParameters;
};

/**
 * Show an Originality Report
 *
 * Get a single originality report
 *
 * Nickname: show_originality_report_files
 */
export async function show_originality_report_files({ pathParams }: Options) {
  return await client().fetchAs<OriginalityReport>(
    `/lti/assignments/{assignment_id}/files/{file_id}/originality_report`,
    {
      method: 'GET',
      pathParams
    }
  );
}
