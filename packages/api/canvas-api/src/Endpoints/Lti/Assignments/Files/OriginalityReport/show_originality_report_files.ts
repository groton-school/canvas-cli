import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
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

type Options = {
  pathParams: show_originality_report_filesPathParameters;
} & (
  | {
      searchParams?: Partial<show_originality_report_filesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_originality_report_filesSearchParameters;
      strict: true;
    }
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
