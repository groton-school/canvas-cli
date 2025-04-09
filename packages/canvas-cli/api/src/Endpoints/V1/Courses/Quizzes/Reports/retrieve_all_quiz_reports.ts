import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

type retrieve_all_quiz_reportsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

type retrieve_all_quiz_reportsSearchParameters = {
  /**
   * Whether to retrieve reports that consider all the submissions or only the
   * most recent. Defaults to false, ignored for item_analysis reports.
   */
  includes_all_versions: boolean;
};

type Options = {
  pathParams: retrieve_all_quiz_reportsPathParameters;
  searchParams?: retrieve_all_quiz_reportsSearchParameters;
};

/**
 * Retrieve all quiz reports
 *
 * Returns a list of all available reports.
 *
 * Nickname: retrieve_all_quiz_reports
 */
export async function retrieve_all_quiz_reports({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/reports`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
