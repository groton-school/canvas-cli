import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

export type retrieve_all_quiz_reportsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type retrieve_all_quiz_reportsSearchParameters = {
  /**
   * Whether to retrieve reports that consider all the submissions or only the
   * most recent. Defaults to false, ignored for item_analysis reports.
   */
  includes_all_versions: boolean;
} & Paginated;

type Options = {
  pathParams: retrieve_all_quiz_reportsPathParameters;
} & (
  | {
      searchParams?: Partial<retrieve_all_quiz_reportsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: retrieve_all_quiz_reportsSearchParameters;
      strict: true;
    }
);

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
  return await client().fetchAs<QuizReport[]>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/reports`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
