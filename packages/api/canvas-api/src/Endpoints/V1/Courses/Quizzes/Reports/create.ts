import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  quiz_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The type of report to be generated. */
  'quiz_report[report_type]': string;
  /**
   * Whether the report should consider all submissions or only the most
   * recent. Defaults to false, ignored for item_analysis.
   *
   * Type: boolean
   */
  'quiz_report[includes_all_versions]': boolean | string;
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
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
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
  const response = await client().fetchAs<QuizReport>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/reports`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
