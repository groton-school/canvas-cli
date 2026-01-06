import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

export type getPathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Whether the output should include documents for the file and/or progress
     * objects associated with this report. (Note: JSON-API only)
     *
     * String[]
     */
    include: string[];
  }>;

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
  const response = await client().fetchAs<QuizReport>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/reports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
