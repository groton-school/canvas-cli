import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a new quiz
 *
 * Get details about a single new quiz.
 *
 * Nickname: get_new_quiz
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<NewQuiz>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}`,
    { method: 'GET', params: parameters }
  );
}
