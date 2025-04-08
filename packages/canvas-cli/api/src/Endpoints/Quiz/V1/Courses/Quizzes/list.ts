import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List new quizzes
 *
 * Get a list of new quizzes.
 *
 * Nickname: list_new_quizzes
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/quiz/v1/courses/{course_id}/quizzes`,
    { method: 'GET', params: parameters }
  );
}
