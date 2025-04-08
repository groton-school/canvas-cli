import { client } from '../../../../../Client.js';
import { QuizQuestion } from '../../../../../Resources/QuizQuestions.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single quiz question
 *
 * Returns the quiz question with the given id
 *
 * Nickname: get_single_quiz_question
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<QuizQuestion>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    { method: 'GET', params: parameters }
  );
}
