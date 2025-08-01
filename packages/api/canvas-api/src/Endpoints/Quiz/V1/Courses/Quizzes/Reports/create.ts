import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { Progress } from '../../../../../../Resources/CoursePace.js';

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
  assignment_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The type of report to be generated. */
  'quiz_report[report_type]': string;
  /** The format of report to be generated. */
  'quiz_report[format]': string;
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
 * Generate a new report for this quiz. Returns a progress object that can be
 * used to track the progress of the report generation.
 *
 * Responses*
 *
 * <code>400 Bad Request</code> if the specified report type or format is
 * invalid <code>409 Conflict</code> if a quiz report of the specified type is
 * already being generated
 *
 * Nickname: create_quiz_report
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/reports`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
