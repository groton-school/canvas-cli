import { client } from '../../../../../Client.js';
import { QuizReport } from '../../../../../Resources/QuizReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Retrieve all quiz reports
 *
 * Returns a list of all available reports.
 *
 * Nickname: retrieve_all_quiz_reports
 */
export async function retrieve_all_quiz_reports({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/reports`,
    { method: 'GET', params: parameters }
  );
}
