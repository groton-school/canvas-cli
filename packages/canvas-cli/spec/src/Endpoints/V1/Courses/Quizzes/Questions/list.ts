import { QuizQuestion } from '../../../../../Resources/QuizQuestions.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List questions in a quiz or a submission
 *
 * Returns the paginated list of QuizQuestions in this quiz.
 *
 * Nickname: list_questions_in_quiz_or_submission
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{quiz_id}/questions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
