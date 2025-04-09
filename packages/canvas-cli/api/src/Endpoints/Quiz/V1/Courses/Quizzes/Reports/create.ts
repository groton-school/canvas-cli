import { client } from '../../../../../../Client.js';
import { Progress } from '../../../../../../Resources/CoursePace.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type createFormParameters = {
  /** The type of report to be generated. */
  'quiz_report[report_type]': string;
  /** The format of report to be generated. */
  'quiz_report[format]': string;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

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
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<Progress>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/reports`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
