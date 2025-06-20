import { client } from '../../../../../Client.js';

export type abort_generation_of_report_or_remove_previously_generated_onePathParameters =
  {
    /** ID */
    course_id: string;
    /** ID */
    quiz_id: string;
    /** ID */
    id: string;
  };

type Options = {
  pathParams: abort_generation_of_report_or_remove_previously_generated_onePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Abort the generation of a report, or remove a previously generated one
 *
 * This API allows you to cancel a previous request you issued for a report to
 * be generated. Or in the case of an already generated report, you'd like to
 * remove it, perhaps to generate it another time with an updated version that
 * provides new features.
 *
 * You must check the report's generation status before attempting to use this
 * interface. See the "workflow_state" property of the QuizReport's Progress
 * object for more information. Only when the progress reports itself in a
 * "queued" state can the generation be aborted.
 *
 * Responses*
 *
 * - <code>204 No Content</code> if your request was accepted
 * - <code>422 Unprocessable Entity</code> if the report is not being generated or
 *   can not be aborted at this stage
 *
 * Nickname: abort_generation_of_report_or_remove_previously_generated_one
 */
export async function abort_generation_of_report_or_remove_previously_generated_one(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/reports/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
