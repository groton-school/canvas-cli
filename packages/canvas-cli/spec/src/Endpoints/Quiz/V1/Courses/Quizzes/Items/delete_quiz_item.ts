import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a quiz item
 *
 * Delete a single quiz item in a new quiz.
 *
 * Nickname: delete_quiz_item
 */
export async function delete_quiz_item({
  parameters
}: Options): Promise<QuizItem> {
  return await (
    await fetch(
      `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
