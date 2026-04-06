import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

export type retrieve_all_quiz_reportsPathParameters = {
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

export type retrieve_all_quiz_reportsSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Whether to retrieve reports that consider all the submissions or only the
     * most recent. Defaults to false, ignored for item_analysis reports.
     *
     * Type: boolean
     */
    includes_all_versions: boolean | string;
  }>;

type Options = (
  | {
      path: retrieve_all_quiz_reportsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: retrieve_all_quiz_reportsPathParameters;
    }
) &
  (
    | {
        query?: Partial<retrieve_all_quiz_reportsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<retrieve_all_quiz_reportsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<retrieve_all_quiz_reportsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: retrieve_all_quiz_reportsSearchParameters;
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
export async function retrieve_all_quiz_reports(options: Options) {
  const response = await client().fetchAs<QuizReport[]>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/reports`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
