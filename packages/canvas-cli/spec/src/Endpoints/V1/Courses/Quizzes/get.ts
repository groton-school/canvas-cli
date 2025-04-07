import { Quiz } from '../../../../Resources/Quizzes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single quiz
 *
 * Returns the quiz with the given id.
 *
 * Nickname: get_single_quiz
 */
export async function get({ parameters }: Options): Promise<Quiz> {
  return await (
    await fetch(`/v1/courses/{course_id}/quizzes/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
