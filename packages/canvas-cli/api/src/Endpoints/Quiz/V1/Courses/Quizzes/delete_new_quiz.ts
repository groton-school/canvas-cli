import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

export type delete_new_quizPathParameters = {
  /**
   * No description
   *
   * Format: 'int64'
   */
  course_id: number;
  /**
   * The id of the assignment associated with the quiz.
   *
   * Format: 'int64'
   */
  assignment_id: number;
};

type Options = {
  pathParams: delete_new_quizPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a new quiz
 *
 * Delete a single new quiz.
 *
 * Nickname: delete_new_quiz
 */
export async function delete_new_quiz(options: Options) {
  return await client().fetchAs<NewQuiz>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
