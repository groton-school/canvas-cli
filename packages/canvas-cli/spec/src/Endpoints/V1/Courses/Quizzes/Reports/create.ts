import { QuizReport } from '../../../../../Resources/QuizReports.js';

type Parameters = {
  /** The type of report to be generated. */
  'quiz_report[report_type]': string;
  /**
   * Whether the report should consider all submissions or only the most
   * recent. Defaults to false, ignored for item_analysis.
   */
  'quiz_report[includes_all_versions]': boolean;
  /**
   * Whether the output should include documents for the file and/or progress
   * objects associated with this report. (Note: JSON-API only)
   */
  include: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a quiz report
 *
 * Create and return a new report for this quiz. If a previously generated
 * report matches the arguments and is still current (i.e. there have been no
 * new submissions), it will be returned.
 *
 * Responses*
 *
 * <code>400 Bad Request</code> if the specified report type is invalid
 * <code>409 Conflict</code> if a quiz report of the specified type is already
 * being generated
 *
 * Nickname: create_quiz_report
 */
export async function create({ parameters }: Options): Promise<QuizReport> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/reports`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
