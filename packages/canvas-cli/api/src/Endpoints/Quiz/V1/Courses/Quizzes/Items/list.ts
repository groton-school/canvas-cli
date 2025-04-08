import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List quiz items
 *
 * Get a list of items in a new quiz.
 *
 * Nickname: list_quiz_items
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items`,
    { method: 'GET', params: parameters }
  );
}
