import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a quiz item
 *
 * Get details about a single item in a new quiz.
 *
 * Nickname: get_quiz_item
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<QuizItem>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    { method: 'GET', params: parameters }
  );
}
