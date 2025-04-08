import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a new quiz
 *
 * Delete a single new quiz.
 *
 * Nickname: delete_new_quiz
 */
export async function delete_new_quiz({ parameters }: Options) {
  return await client().fetchAs<NewQuiz>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}`,
    { method: 'DELETE', params: parameters }
  );
}
