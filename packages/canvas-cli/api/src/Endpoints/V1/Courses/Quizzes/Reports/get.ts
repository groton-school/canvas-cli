import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a quiz report
 *
 * Returns the data for a single quiz report.
 *
 * Nickname: get_quiz_report
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<QuizReport>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/reports/{id}`,
    { method: 'GET', params: parameters }
  );
}
