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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/quiz/v1/courses/{course_id}/quizzes`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
