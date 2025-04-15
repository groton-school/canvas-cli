import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type createFormParameters = {
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
   *
   * String[]
   */
  include: string[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

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
export async function create(options: Options) {
  return await client().fetchAs<QuizReport>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/reports`,
    {
      method: 'POST',
      ...options
    }
  );
}
