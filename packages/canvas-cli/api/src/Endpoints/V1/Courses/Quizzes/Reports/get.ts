import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /**
   * Whether the output should include documents for the file and/or progress
   * objects associated with this report. (Note: JSON-API only)
   *
   * String[]
   */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a quiz report
 *
 * Returns the data for a single quiz report.
 *
 * Nickname: get_quiz_report
 */
export async function get(options: Options) {
  return await client().fetchAs<QuizReport>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/reports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
